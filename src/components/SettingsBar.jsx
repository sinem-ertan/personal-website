import DarkModeSwitch from "./DarkModeSwitch";
import LanguageSwitch from "./LanguageSwitch";

function SettingsBar() {
  return (
    <div className="flex w-full justify-end p-2.5 pt-6 items-center">
      <DarkModeSwitch />
      <div className="w-0 border border-neutral-500 h-3.5 ml-2.5 mr-2.5" />
      <LanguageSwitch />
    </div>
  );
}

export default SettingsBar;
