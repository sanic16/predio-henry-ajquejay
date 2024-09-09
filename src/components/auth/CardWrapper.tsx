import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import Header from "./Header";
import Social from "./Social";
import BackButton from "./BackButton";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
}) => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && <Social />}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
