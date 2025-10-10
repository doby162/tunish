package main

import (
	"toonish2/cmd/tunish_service/api"
	"toonish2/internal/message_slice"
)

func main() {
	messages := message_slice.NewMessageSlice()

	err := api.Api(messages)
	if err != nil {
		panic(err)
	}
}
