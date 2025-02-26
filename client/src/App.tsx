import NoteForm from "./features/notes/NoteForm";
import NoteList from "./features/notes/NoteList";

const App: React.FC = () => {
  return (
    <>
      <NoteForm />
      <NoteList />
    </>
  );
};

export default App;
