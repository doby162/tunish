package message_slice

import (
	"bytes"
	"encoding/json"
	"io"
	"log"
	"os"
	"sync"
)

type Message struct {
	Message string `json:"message"`
	Name    string `json:"name"`
}
type MessageSlice struct {
	mu       sync.Mutex
	messages []Message
	chatLog  *os.File
}

func (s *MessageSlice) Append(message Message) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.messages = append(s.messages, message)
	str, _ := json.Marshal(message)
	_, err := s.chatLog.WriteString(string(str) + "\n")
	if err != nil {
		log.Println(err)
	}
	err = s.chatLog.Sync()
	if err != nil {
		log.Println(err)
	}
}

func (s *MessageSlice) Recent(count int) []Message {
	if len(s.messages) < count {
		return s.messages
	}
	return s.messages[len(s.messages)-count:]
}

func NewMessageSlice(chatLog *os.File) (*MessageSlice, error) {
	var logBytes []byte
	messages := []Message{}
	logBytes, err := io.ReadAll(chatLog)
	if err != nil {
		return nil, err
	}
	if len(logBytes) > 0 {
		lines := bytes.Split(logBytes, []byte{'\n'})
		for _, line := range lines {
			if len(line) == 0 {
				continue
			}
			var message Message
			err := json.Unmarshal(line, &message)
			if err != nil {
				log.Println(err)
			} else {
				messages = append(messages, message)
			}
		}
	}
	return &MessageSlice{
		mu:       sync.Mutex{},
		messages: messages,
		chatLog:  chatLog,
	}, nil
}
