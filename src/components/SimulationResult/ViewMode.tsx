import { ViewMode } from '../../types';

interface ViewModeProps {
  viewMode: ViewMode;
  handleViewModeChange: (mode: ViewMode) => void;
}

export default function ViewModeComponent({
  viewMode,
  handleViewModeChange,
}: ViewModeProps) {
  return (
    <>
      <h3 className="text-xl font-bold my-4">View mode</h3>
      <div className="flex flex-col sm:flex-row items-center mt-4">
        <button
          className={`px-4 py-2 w-full sm:w-auto rounded-t-md sm:rounded-l-md sm:rounded-tr-none ${
            viewMode === ViewMode.Energy
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200'
          }`}
          onClick={() => handleViewModeChange(ViewMode.Energy)}
        >
          Consumed Energy
        </button>
        <button
          className={`px-4 py-2 w-full sm:w-auto border-gray-400 border-t border-b sm:border-t-0 sm:border-b-0 sm:border-l sm:border-r ${
            viewMode === ViewMode.Events
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200'
          }`}
          onClick={() => handleViewModeChange(ViewMode.Events)}
        >
          Charging Events
        </button>
        <button
          className={`px-4 py-2 w-full sm:w-auto rounded-b-md sm:rounded-r-md sm:rounded-b-none ${
            viewMode === ViewMode.MaxPower
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200'
          }`}
          onClick={() => handleViewModeChange(ViewMode.MaxPower)}
        >
          Max Power Demand
        </button>
      </div>
    </>
  );
}
