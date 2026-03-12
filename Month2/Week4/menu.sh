#!/bin/bash

while true
do
    echo "----- MENU -----"
    echo "1. Display Current Date"
    echo "2. List Files in Directory"
    echo "3. Show Current Working Directory"
    echo "4. Exit"
    echo "Enter your choice:"

    read choice

    case $choice in
        1) date ;;
        2) ls ;;
        3) pwd ;;
        4) echo "Exiting program..."
           break ;;
        *) echo "Invalid choice" ;;
    esac

    echo ""
done
