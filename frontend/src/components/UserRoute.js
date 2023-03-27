import { useEffect } from 'react';
import { fetchBooks} from './redux/actions/actionBook';
import { useDispatch,useSelector } from 'react-redux';

const UserRoute = () => {
    const dispatch = useDispatch();
    const {isLoading, data, error} = useSelector((state) => {
        return state.books
    });
    
    useEffect(() => {
      dispatch(fetchBooks());
     }, [dispatch]);
    
     return(
        <div>
          {data.map((book) => {
            return(
                <div>
                    <h1>{book.name}</h1>
                    <p>{book.description}</p>
                </div>
            )
          })}
        </div>
    )
}
export default UserRoute