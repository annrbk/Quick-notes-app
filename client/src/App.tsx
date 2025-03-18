import Header from "./components/Header";
import NoteForm from "./features/notes/NoteForm";
import NoteList from "./features/notes/NoteList";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <NoteForm />
      <NoteList />
    </>
  );
};

export default App;
