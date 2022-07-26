import { BsGenderAmbiguous } from "react-icons/bs";

function SelectOption({ className, onChange, required }) {
  return (
    <div className={className}>
      <BsGenderAmbiguous className="text-slate-400 text-2xl" />
      <select
        id="gender"
        className="w-full focus:bg-orange-100 focus:outline-none"
        onChange={onChange}
        required={required}
      >
        <option disabled selected value="not defined">
          Select a Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>
    </div>
  );
}

export default SelectOption;
