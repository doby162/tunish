package main

import (
	"os"
	"toonish2/cmd/tunish_service/api"
	"toonish2/internal/message_slice"
)

func main() {
	chatLog, err := os.OpenFile("chatLog.json", os.O_CREATE|os.O_RDWR, 0777)
	if err != nil {
		panic(err)
	}

	messages, err := message_slice.NewMessageSlice(chatLog)
	if err != nil {
		panic(err)
	}

	defer func(chatLog *os.File) {
		err := chatLog.Close()
		if err != nil {
			panic(err)
		}
	}(chatLog)

	err = api.Api(messages)
	if err != nil {
		panic(err)
	}
}
