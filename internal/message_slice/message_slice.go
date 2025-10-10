package message_slice

import "sync"

type Message struct {
	Message string `json:"message"`
	Name    string `json:"name"`
}
type MessageSlice struct {
	mu       sync.Mutex
	messages []Message
}

func (s *MessageSlice) Append(message Message) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.messages = append(s.messages, message)
}

func (s *MessageSlice) Recent(count int) []Message {
	if len(s.messages) < count {
		return s.messages
	}
	return s.messages[len(s.messages)-count:]
}

func NewMessageSlice() *MessageSlice {
	return &MessageSlice{
		mu:       sync.Mutex{},
		messages: []Message{},
	}
}
