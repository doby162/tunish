package main

import (
	"toonish2/cmd/tunish_service/api"
)

func main() {
	messages := []api.Message{}

	err := api.Api(&messages)
	if err != nil {
		panic(err)
	}
}
