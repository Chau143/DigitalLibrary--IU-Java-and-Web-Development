import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border-2 border-gray-300 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white p-4 m-3 flex flex-col justify-between relative">
      {/* Publish year tag */}
      <h2 className="absolute top-2 right-2 px-3 py-1 bg-red-200 text-sm rounded-md">
        {book.publishYear}
      </h2>

      {/* Book ID */}
      <h4 className="mt-2 text-xs sm:text-sm text-gray-500 break-all">{book._id}</h4>

      {/* Title */}
      <div className="flex items-center gap-2 mt-3">
        <PiBookOpenTextLight className="text-red-400 text-xl sm:text-2xl" />
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
          {book.title}
        </h2>
      </div>

      {/* Author */}
      <div className="flex items-center gap-2 mt-1">
        <BiUserCircle className="text-red-400 text-xl sm:text-2xl" />
        <h2 className="text-sm sm:text-base text-gray-700">{book.author}</h2>
      </div>

      {/* Action buttons */}
      <div className="flex justify-around sm:justify-between items-center gap-3 mt-4">
        <BiShow
          className="text-2xl sm:text-3xl text-blue-700 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-xl sm:text-2xl text-green-700 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-xl sm:text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-xl sm:text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>

      {/* Modal */}
      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;