package api

import (
	"encoding/json"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"io/ioutil"
	"net/http"
	"toonish2/internal/message_slice"
)

type postResponse struct {
	Status  int    `json:"status"`
	Message string `json:"message"`
}
type postRequest struct {
	Message string `json:"message"`
	Name    string `json:"name"`
}

type MessagesGetResponse struct {
	Messages []message_slice.Message `json:"messages"`
}

func Api(messages *message_slice.MessageSlice) error {
	r := chi.NewRouter()
	r.Use(middleware.Logger)

	// Serve static files from frontend/toonish/dist/
	fs := http.FileServer(http.Dir("frontend/toonishFE/dist/"))

	r.Get("/messages", func(w http.ResponseWriter, r *http.Request) {
		mes := messages.Recent(10)
		resp, err := json.Marshal(MessagesGetResponse{mes})
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
		w.Header().Set("Content-Type", "application/json")
		w.Write(resp)
	})
	r.Post("/messages", func(w http.ResponseWriter, r *http.Request) {
		defer r.Body.Close()
		body, err := ioutil.ReadAll(r.Body)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		var req postRequest
		err = json.Unmarshal(body, &req)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		messages.Append(message_slice.Message{Message: req.Message, Name: req.Name})
		w.Header().Set("Content-Type", "application/json")
		if err := json.NewEncoder(w).Encode(postResponse{Status: http.StatusOK, Message: req.Message}); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	})
	hub := newHub(messages)
	go hub.run()
	r.Get("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(hub, w, r)
	})

	// This serves everything under "/"
	r.Get("/*", func(w http.ResponseWriter, r *http.Request) {
		http.StripPrefix("/", fs).ServeHTTP(w, r)
	})

	return http.ListenAndServeTLS(":3000", "cert.pem", "key.pem", r)
}
