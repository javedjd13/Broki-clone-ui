import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCalendar,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { OVERVIEW_FIELDS } from "../../lib/Constant";

const ICON_MAP = {
  faHouse,
  faCalendar,
  faUserTie,
};

const ServiceOverview = ({ serviceData }) => (
  <section className="bg-white p-6 rounded-2xl shadow-md">
    <h2 className="text-xl font-semibold mb-4">Overview</h2>

    <div className="flex flex-col md:flex-row justify-between gap-6">
      {OVERVIEW_FIELDS.map(({ label, value, icon }, i) => {
        const displayValue = value ?? serviceData?.[label.toLowerCase()] ?? "—";

        return (
          <div
            key={i}
            className="flex items-center gap-4 p-4 rounded-xl w-full md:w-1/3 border border-gray-200"
          >
            <FontAwesomeIcon icon={ICON_MAP[icon]} className="text-xl text-[#26c4a0]" aria-hidden="true" />
            <div>
              <p className="font-semibold text-gray-800">{label}</p>
              <p className="text-gray-600">{displayValue}</p>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default ServiceOverview;