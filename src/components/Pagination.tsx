import React from 'react';
import { GrFormPrevious } from 'react-icons/gr';
import { MdNavigateNext, MdSkipNext, MdSkipPrevious } from 'react-icons/md';
interface PageSelectProps {
    page: number;
    pageSize: number;
    totalPages: number;
    onChangePage: (size: number) => void;
    onChangePageSize: (size: number) => void;
}
const PageSelect: React.FC<PageSelectProps> = ({ page, pageSize, totalPages, onChangePage, onChangePageSize }) => {

    let paginationItems = [];

    let start = page - 2;
    let end = page + 2;

    // Adjust the start and end values when they're out of bounds
    if (start < 1) {
        end += (1 - start);
        start = 1;
    }
    if (end > totalPages) {
        start -= (end - totalPages);
        end = totalPages;
    }

    // Generate the range of numbers
    for (let i = start; i <= end; i++) {
        if (i > 0) {
            paginationItems.push(
                <button
                    key={`page-${i}`}
                    className={`mx-1 px-1 md:px-3 md:py-2 rounded text-[10px] md:text-sm  ${i === page ? 'bg-purple-600 text-white' : 'bg-gray-200 hover:bg-purple-300 text-gray-700'
                        }`}
                    onClick={() => onChangePage(i)}
                >
                    {i}
                </button>
            );
        }
    }
    return (
        <div className="flex flex-wrap gap-5 items-center justify-center md:justify-between h-max">
            <div className="flex flex-wrap space-x-2 justify-center drop-shadow-lg">
                <button
                    className="px-1.5 py-1 md:px-3 md:py-2 rounded bg-gray-200 hover:bg-purple-300 text-gray-700 text-xs md:text-sm cursor-pointer"
                    onClick={() => onChangePage(1)}
                    disabled={page === 1}
                >
                    <MdSkipPrevious />
                </button>
                <button
                    className="px-1.5 py-1 md:px-3 md:py-2 rounded bg-gray-200 hover:bg-purple-300 text-gray-700 text-xs md:text-sm cursor-pointer"
                    onClick={() => onChangePage(page - 1)}
                    disabled={page === 1}
                >
                    <GrFormPrevious />
                </button>
                {paginationItems}
                <button
                    className="px-1.5 py-1 md:px-3 md:py-2 rounded bg-gray-200 hover:bg-purple-300 text-gray-700 text-xs md:text-sm"
                    onClick={() => onChangePage(page + 1)}
                    disabled={page === totalPages}
                >
                    <MdNavigateNext />
                </button>
                <button
                    className="px-1.5 py-1 md:px-3 md:py-2 rounded bg-gray-200 hover:bg-purple-300 text-gray-700 text-xs md:text-sm"
                    onClick={() => onChangePage(totalPages)}
                    disabled={page === totalPages}
                >
                    <MdSkipNext />
                </button>
            </div>
            <select
                className="px-1.5 py-1 md:px-3 md:py-2 rounded bg-gray-200 text-gray-700 text-xs md:text-sm md:mt-0 cursor-pointer"
                aria-label="Default select example"
                onChange={(e) => onChangePageSize(Number(e.target.value))}
            >
                <option selected={pageSize === 10} value="10">10</option>
                <option selected={pageSize === 20} value="20">20</option>
                <option selected={pageSize === 30} value="30">30</option>
                <option selected={pageSize === 50} value="50">50</option>
                <option selected={pageSize === 100} value="100">100</option>
                <option selected={pageSize === 300} value="300">300</option>
                <option selected={pageSize === 500} value="500">500</option>
                <option selected={pageSize === 1000} value="1000">1000</option>
            </select>
        </div>
    );
}

export default PageSelect;
