package main

import(
"fmt"
"<%= appName %>/hello"
)

func main() {
	fmt.Println(hello.BuildHello())
}
