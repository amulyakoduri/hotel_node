
import { useEffect, useState } from 'react';
import { fetchBooks,deleteBook,addBook,updateBook} from './redux/actions/actionBook';
import { useDispatch,useSelector } from 'react-redux';

const BookList = () => {
    const [name, setName] = useState('')
    const [description, setDec] = useState('')
    const [term, setTerm] = useState(false)

    const dispatch = useDispatch();
    const {isLoading, data, error} = useSelector((state) => {
        return state.books
    });
    
    useEffect(() => {
      dispatch(fetchBooks());
     }, [dispatch]);

     const handleBookEdit = (id) => {
        setTerm(true)
        const update = data.map((user) => user.id === id )
        const data = {
            name: name,
            description: description
        }

        dispatch(updateBook({...update,...data}))
     }

     const handleBookDelete = (id) => {
        dispatch(deleteBook(id))
     }

     const handleName = (e) => {
        setName(e.target.value)
     }

     const handleDes = (e) => {
        setDec(e.target.value)
     }
    
     const handleSubmitAdd = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            description: description
        }
        dispatch(addBook({...data}))
     }
     return(
        <div>
          <form submit={handleSubmitAdd}>
            <input type="name" value={name} onChange={handleName}/>
            <input type="text" value={description} onChange={handleDes}/>
            <button>{term ? 'Edit': 'Add'}</button>
          </form>
          {data.map((book) => {
            return(
                <div key={book.id}>
                    <h1>{book.name}</h1>
                    <p>{book.description}</p>
                    <button onClick={() =>handleBookEdit(book.id)}>Edit</button>
                    <button onClick={() => handleBookDelete(book.id)}>Delete</button>
                </div>
            )
          })}
        </div>
    )
}
export default BookList