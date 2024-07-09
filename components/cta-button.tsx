import classNames from "classnames";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export const CtaButton = ({
  text = "Connect",
  className,
}: {
  text?: string;
  className?: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={classNames(
            "text-background bg-primary rounded-md py-1 px-6 text-lg font-normal hover:bg-primary-dark transition-all",
            className
          )}
        >
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="md:p-8">
        <iframe
          className="w-full h-[calc(100vh-140px)] md:h-[50vh] overflow-y-auto "
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1VPXT7O30JWW-Bs3pal-IURmiNjvO0mJ5FegehqMqNIKtOM4Ac14P5EzuJF99GT5wQfFK04WTr?gv=true"
          title="Book a consultation"
        />
      </DialogContent>
    </Dialog>
  );
};
