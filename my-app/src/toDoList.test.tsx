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
        const apple = screen.getByText("Apples");
        const banana = screen.getByText("Bananas");
    })
   });