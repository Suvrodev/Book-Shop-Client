import { useState } from "react";
import LoadingPage from "../../component/LoadingPage/LoadingPage";
import { useGetAllBookQuery } from "../../Redux/api/features/Book/bookManagementApi";
import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useNavigate } from "react-router";

interface BookType {
  key: React.Key;
  title: string;
  author: string;
  category: string;
  price: number;
  inStock: boolean;
}

const AllBooks = () => {
  const { data: bookData, isLoading } = useGetAllBookQuery(undefined);
  const books = bookData?.data || [];
  const [searchTerm, setSearchTerm] = useState<string>("");

  const navigate = useNavigate();

  const handleGoDetail = (id) => {
    console.log("id here: ", id);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter((book: any) =>
    [book.title, book.author, book.category]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const columns: TableColumnsType<BookType> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: "In Stock",
      dataIndex: "inStock",
      key: "inStock",
      filters: [
        { text: "In Stock", value: true },
        { text: "Out of Stock", value: false },
      ],
      onFilter: (value, record) => record.inStock === value,
      render: (inStock) => (inStock ? "Yes" : "No"),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          className="btn btn-primary text-white"
          // onClick={() => navigate(`/book-detail/${record._id}`)}
          onClick={() => handleGoDetail(record._id)}
        >
          View Details
        </Button>
      ),
    },
  ];

  const onChange: TableProps<BookType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("Table params:", pagination, filters, sorter, extra);
  };

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">All Books</h1>

      <div className="flex justify-center gap-4 my-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by title, author, or category"
          className="py-3 px-4 rounded-md border bg-white border-purple-500 w-10/12 md:w-1/4"
        />
        <button className="btn btn-primary text-white">Search</button>
      </div>

      <Table<BookType>
        columns={columns}
        dataSource={filteredBooks.map((book) => ({
          key: book._id,
          title: book.title,
          author: book.author,
          category: book.category,
          price: book.price,
          inStock: book.inStock,
        }))}
        onChange={onChange}
        showSorterTooltip
      />
    </div>
  );
};

export default AllBooks;
