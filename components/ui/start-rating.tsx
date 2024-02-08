import { Fragment } from "react";

const StarRating = ({
  average,
  isSimilar,
}: {
  average: number;
  isSimilar?: boolean;
}) => {
  const scaledAverage = average / 2;
  const roundedAverage = Math.round(scaledAverage * 2) / 2;

  return (
    <div className="flex items-center text-gray-600">
      {[...Array(5)].map((_, index) => {
        const starNumber = index + 1;
        const filledStar = roundedAverage >= starNumber;
        const halfStar =
          roundedAverage > starNumber - 0.5 && roundedAverage < starNumber;
        console.log({ filledStar });

        return (
          <Fragment key={index}>
            <svg
              className={`w-4 h-4 me-1 ${
                filledStar ? "text-yellow-300" : "text-gray-300"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            {halfStar && (
              <svg
                className="h-5 w-5 fill-current text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 1l2.45 6.15h6.3l-4.75 3.87L14.55 19 10 15.33 5.45 19l1.95-8.98L5 7.15h6.3L10 1z" />
              </svg>
            )}
          </Fragment>
        );
      })}
      {isSimilar && (
        <span className="ml-1">{`(${roundedAverage.toFixed(1)} of 5)`}</span>
      )}
    </div>
  );
};

export default StarRating;
