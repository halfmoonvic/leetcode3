package main

import "fmt"

func search(i int, s string) int {
	temp := 0
	current := s[i]
	prev := s[i-1]

	n := 0
	for {
		first := i - n - 1
		next := i + n

		if first >= 0 && s[first] == prev && s[next] == current {
			temp++
			n++
		} else {
			break
		}
	}
	return temp
}

func countBinarySubstrings(s string) int {
	num := 0
	for i := range s {
		if i == 0 {
			continue
		}
		prev := s[i-1]
		current := s[i]
		if prev != current {
			num += search(i, s)
		}
	}
	return num
}

func main() {
	fmt.Println(countBinarySubstrings("00110011"))
}
