import { DAYS, UNKNOWN } from '@/utils/constants';

export const WorkingHours: React.FC<{ data: WorkingHours[] }> = ({ data }) => {
  return (
    <div className="flex-1 p-4 text-center text-sm md:w-1/4 md:text-left md:text-base">
      <h3 className="mb-2 text-lg font-semibold text-gray-700">
        Working Hours
      </h3>
      <ul className="space-y-1">
        {data.map((item) => (
          <li
            className="flex justify-between text-sm text-gray-600"
            key={item.id}
          >
            <span className="min-w-[30%] flex-1 font-medium">
              {DAYS[item.day_of_the_week - 1] || UNKNOWN}
            </span>
            <span className="min-w-[30%] flex-1">
              {item.open_hour} - {item.close_hour}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
