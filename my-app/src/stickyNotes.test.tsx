import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";

describe("Create StickyNote", () => {
 test("renders create note form", () => {
   render(<StickyNotes />);

   const createNoteButton = screen.getByText("Create Note");
   expect(createNoteButton).toBeInTheDocument();
 });

 test("creates a new note", () => {
   render(<StickyNotes />);

// Please make sure your sticky note has a title and content input field with the following placeholders.
   const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
   const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
   const createNoteButton = screen.getByText("Create Note");

   fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
   fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note content" },
   });
   fireEvent.click(createNoteButton);

   const newNoteTitle = screen.getByText("New Note");
   const newNoteContent = screen.getByText("Note content");

   expect(newNoteTitle).toBeInTheDocument();
   expect(newNoteContent).toBeInTheDocument();
 });
 test ("Read: Are all the notes that are created displayed on the page", () => {
    render(<StickyNotes />);
    const testNoteOneTitle = screen.getByText("test note 1 title");
    const testNoteTwoTitle = screen.getByText("test note 2 title");
    const testNoteThreeTitle = screen.getByText("test note 3 title");
    const testNoteFourTitle = screen.getByText("test note 4 title");
    const testNoteFiveTitle = screen.getByText("test note 5 title");
    const testNoteSixTitle = screen.getByText("test note 6 title");
    const testNoteOneContent = screen.getByText("test note 1 content");
    const testNoteTwoContent = screen.getByText("test note 2 content");
    const testNoteThreeContent = screen.getByText("test note 3 content");
    const testNoteFourContent = screen.getByText("test note 4 content");
    const testNoteFiveContent = screen.getByText("test note 5 content");
    const testNoteSixContent = screen.getByText("test note 6 content");
    expect(testNoteOneTitle).toBeInTheDocument();
    expect(testNoteTwoTitle).toBeInTheDocument();
    expect(testNoteThreeTitle).toBeInTheDocument();
    expect(testNoteFourTitle).toBeInTheDocument();
    expect(testNoteFiveTitle).toBeInTheDocument();
    expect(testNoteSixTitle).toBeInTheDocument();
    expect(testNoteOneContent).toBeInTheDocument();
    expect(testNoteTwoContent).toBeInTheDocument();
    expect(testNoteThreeContent).toBeInTheDocument();
    expect(testNoteFourContent).toBeInTheDocument();
    expect(testNoteFiveContent).toBeInTheDocument();
    expect(testNoteSixContent).toBeInTheDocument();
 })

 test ("Update: Once the update is done, is the document object value updating", () => {
    render(<StickyNotes />);
    
    const testNoteOneContent = screen.getByText("test note 1 content");
    
    fireEvent.click(testNoteOneContent);
    fireEvent.change(testNoteOneContent, { target: { textContent: "test note 1 something" } });
    
    const newTestNoteOneContent = screen.getByText("test note 1 something");
    expect(newTestNoteOneContent).toBeInTheDocument();
 })

});