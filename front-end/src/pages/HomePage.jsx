import { useState } from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import api  from "../lib/axios";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";
//import axios from "axios";


const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get('/notes');
        setNotes(res.data); // ✅ Correct way to get data with axios
      } catch (error) {
        console.log('Error fetching notes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className='text-center text-primary py-10'>Loading Notes...</div>}

        {!loading && notes.length === 0 && <NotesNotFound/>}

        {/* {!loading && notes.length === 0 && <div className='text-center text-gray-500'>No notes found.</div>} */}
        {!loading && notes.length > 0 && (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
