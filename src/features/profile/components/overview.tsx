"use client";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
import {
  BriefcaseBusinessIcon,
  CopyIcon,
  DownloadIcon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { USER } from "@/features/profile/data/user";
import { copyText } from "@/utils/copy";
import { decodeEmail, decodePhoneNumber, formatPhoneNumber } from "@/utils/string";

import { Panel, PanelContent } from "./panel";

export function Overview() {
  const [localTime, setLocalTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      setLocalTime(
        dayjs().tz(USER.timeZone).format("h:mm A")
      );
    };

    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  const email = decodeEmail(USER.email);
  const phone = decodePhoneNumber(USER.phoneNumber);

  const handleCopy = (text: string, message: string) => {
    copyText(text);
    toast.success(message);
  };

  return (
    <Panel id="overview">
      <PanelContent className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {USER.jobs.length > 0 && (
          <div className="flex items-center gap-2 text-sm">
            <BriefcaseBusinessIcon className="size-4 shrink-0 text-muted-foreground" />
            <span className="text-muted-foreground">{USER.jobs[0].title}</span>
          </div>
        )}

        <div className="flex items-center gap-2 text-sm">
          <MapPinIcon className="size-4 shrink-0 text-muted-foreground" />
          <span className="text-muted-foreground">{USER.address}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <GlobeIcon className="size-4 shrink-0 text-muted-foreground" />
          <span className="text-muted-foreground">
            {localTime ? `${localTime} local time` : "\u00A0"}
          </span>
        </div>

        <button
          className="flex items-center gap-2 text-sm hover:text-foreground"
          onClick={() => handleCopy(email, "Email copied")}
        >
          <MailIcon className="size-4 shrink-0 text-muted-foreground" />
          <span className="text-muted-foreground">{email}</span>
          <CopyIcon className="size-3 shrink-0 text-muted-foreground" />
        </button>

        <button
          className="flex items-center gap-2 text-sm hover:text-foreground"
          onClick={() => handleCopy(phone, "Phone number copied")}
        >
          <PhoneIcon className="size-4 shrink-0 text-muted-foreground" />
          <span className="text-muted-foreground">
            {formatPhoneNumber(phone)}
          </span>
          <CopyIcon className="size-3 shrink-0 text-muted-foreground" />
        </button>

        <Button variant="secondary" size="sm" className="w-fit" asChild>
          <a href="/vcard" download>
            <DownloadIcon />
            Download vCard
          </a>
        </Button>
      </PanelContent>
    </Panel>
  );
}
