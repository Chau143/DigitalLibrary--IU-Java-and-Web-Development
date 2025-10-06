import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    // Make the table scrollable horizontally on small screens
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border-collapse border border-slate-400 text-sm sm:text-base">
        <thead className="bg-slate-100">
          <tr>
            <th className="border border-slate-600 px-2 py-2 text-center">No</th>
            <th className="border border-slate-600 px-2 py-2 text-center">Title</th>
            <th className="border border-slate-600 px-2 py-2 text-center hidden md:table-cell">
              Author
            </th>
            <th className="border border-slate-600 px-2 py-2 text-center hidden md:table-cell">
              Publish Year
            </th>
            <th className="border border-slate-600 px-2 py-2 text-center">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className="odd:bg-white even:bg-slate-50 hover:bg-slate-100"
            >
              <td className="border border-slate-700 text-center py-2">
                {index + 1}
              </td>
              <td className="border border-slate-700 text-center py-2">
                {book.title}
              </td>
              <td className="border border-slate-700 text-center py-2 hidden md:table-cell">
                {book.author}
              </td>
              <td className="border border-slate-700 text-center py-2 hidden md:table-cell">
                {book.publishYear}
              </td>
              <td className="border border-slate-700 text-center py-2">
                <div className="flex justify-center gap-2 sm:gap-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-xl sm:text-2xl text-green-800" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-xl sm:text-2xl text-yellow-600" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-xl sm:text-2xl text-red-600" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
