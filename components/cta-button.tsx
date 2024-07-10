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
          src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0UZUkKgCsM_0Lyi0DiUfRxbdDEBb_yMG8M4U4hMcBntChXgi5SKQRli6Iy9IenEVDPYivIxT4f?gv=true"
          title="Book a consultation"
        />
      </DialogContent>
    </Dialog>
  );
};
