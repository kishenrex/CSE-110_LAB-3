import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";
import React, { useState } from 'react';

describe("Read toDoList", () => {
    test("Read: Are all the items in the list displayed on the screen", () => {
        render(<ToDoList />);
   
        const apple = screen.getByText("Apples");
        const banana = screen.getByText("Bananas");
   
        expect(apple).toBeInTheDocument();
        expect(banana).toBeInTheDocument();
    });
    test("Is the number of items checked the same as shown in the title?", () => {
        render(<ToDoList />);
        //NOT WORKING YET
        const checkboxes = screen.getAllByRole("checkbox");

        fireEvent.click(checkboxes[0]);
        fireEvent.click(checkboxes[0]);

        expect(screen.getByText(/Items bought: 2/)).toBeInTheDocument();

        // const numRemainingItems = screen.getByText(/Items bought: (\d+)/);
        // const numRemainingItemsExtracted = numRemainingItems.textContent.match(/Items bought: (\d+)/)[1];

        // expect(numRemainingItemsExtracted).toBe('2');
    })
   });