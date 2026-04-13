import { Sun, Moon, MoveHorizontal, MoveVertical } from "lucide-react";
import { useTheme, useAlignment } from "#/context/theme/theme";
import { useLocation, useNavigate } from "@tanstack/react-router";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { alignment, setAlignment } = useAlignment();
  return (
    <div className="flex justify-between  items-center p-4 bg-header_color text-header_text_color">
      <div
        className="font-bold text-[clamp(1rem,2vw+0.1rem,1.5rem)] hover:cursor-pointer "
        onClick={() => navigate({ to: "/" })}
      >
        TimelineCreator
      </div>

      <div className="flex gap-6">
        {location.pathname === "/create" && (
          <div className=" grid place-items-center">
            {alignment === "horizontal" ? (
              <MoveHorizontal
                onClick={() => setAlignment("vertical")}
                className="hover:cursor-pointer w-[clamp(1.25rem,2vw+0.1rem,1.5rem)] h-[clamp(1.25rem,2vw+0.1rem,1.5rem)] "
              />
            ) : (
              <MoveVertical
                onClick={() => setAlignment("horizontal")}
                className="hover:cursor-pointer w-[clamp(1.25rem,2vw+0.1rem,1.5rem)] h-[clamp(1.25rem,2vw+0.1rem,1.5rem)] "
              />
            )}
          </div>
        )}
        <div
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }
          className="hover:cursor-pointer"
        >
          {theme === "light" ? (
            <Sun className="w-[clamp(1.25rem,2vw+0.1rem,1.5rem)] h-[clamp(1.25rem,2vw+0.1rem,1.5rem)] " />
          ) : (
            <Moon className="w-[clamp(1.25rem,2vw+0.1rem,1.5rem)] h-[clamp(1.25rem,2vw+0.1rem,1.5rem)] " />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
