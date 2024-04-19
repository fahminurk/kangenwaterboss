import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatToIDR } from "@/lib/utils";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("Products");
  const keys = [
    "Leveluk-JR4",
    "Leveluk-Kangen-8",
    "Leveluk-SUPER-501",
    "Leveluk-SD-501",
    "Leveluk-SD-501-Platinum",
    "Anespa-DX",
  ] as const;
  return (
    <div className="container my-5">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {keys.map((key) => (
          <Link href={`/product/${key}`} key={key}>
            <Card>
              <CardContent className="p-0">
                <img src={t(`${key}.img`)} alt="" />
              </CardContent>
              <CardFooter className="p-1">
                <div className="flex flex-col flex-1">
                  <p className="border-b py-1">{t(`${key}.name`)}</p>
                  <p className="text-xs py-1">
                    {formatToIDR(t(`${key}.price`))}
                  </p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
