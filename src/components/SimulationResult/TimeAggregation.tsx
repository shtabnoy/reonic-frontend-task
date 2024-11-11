import { TimeAggregation } from '../../types';

interface TimeAggregationProps {
  timeAggregation: TimeAggregation;
  handleTimeAggregationChange: (aggregation: TimeAggregation) => void;
}

export default function TimeAggregationComponent({
  timeAggregation,
  handleTimeAggregationChange,
}: TimeAggregationProps) {
  return (
    <>
      <h3 className="text-xl font-bold my-4">Time aggregation</h3>
      <div className="flex flex-col sm:flex-row items-center mt-4">
        <button
          className={`px-4 py-2 w-full sm:w-auto rounded-t-md sm:rounded-l-md sm:rounded-tr-none ${
            timeAggregation === TimeAggregation.Monthly
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200'
          }`}
          onClick={() => handleTimeAggregationChange(TimeAggregation.Monthly)}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 w-full sm:w-auto border-gray-400 border-t border-b sm:border-t-0 sm:border-b-0 sm:border-l sm:border-r ${
            timeAggregation === TimeAggregation.Weekly
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200'
          }`}
          onClick={() => handleTimeAggregationChange(TimeAggregation.Weekly)}
        >
          Weekly
        </button>
        <button
          className={`px-4 py-2 w-full sm:w-auto rounded-b-md sm:rounded-r-md sm:rounded-b-none ${
            timeAggregation === TimeAggregation.Daily
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200'
          }`}
          onClick={() => handleTimeAggregationChange(TimeAggregation.Daily)}
        >
          Daily
        </button>
      </div>
    </>
  );
}
