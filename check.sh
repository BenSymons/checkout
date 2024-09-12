#!/usr/bin/env bash

exec < /dev/tty

echo "checking..."
read -p "what is your answer: " answer

echo "your answer is $answer"