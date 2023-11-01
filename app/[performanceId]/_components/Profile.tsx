import React, { useState, useEffect } from "react";
import { Flex, Text, Grid } from "@radix-ui/themes";
import Link from "@/app/components/Link";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_FINANCE_API_KEY!,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_FINANCE_API_URL!,
  },
};

const Profile = ({ stockId }: { stockId: string }) => {
  const url = `https://ms-finance.p.rapidapi.com/stock/v2/get-profile?performanceId=${stockId}`;
  const [companyData, setCompanyData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();

        setCompanyData(result[stockId]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mt-6 bg-white p-6 rounded-xl">
      {companyData && (
        <Flex direction="column" gap="4">
          <Text weight="bold">{companyData.ticker.value}</Text>
          <Grid columns="2" rows="1" gap="2">
            <Flex direction="column" className="col-span-1">
              <Text>{companyData.headquarterAddress1.value}</Text>
              <Text>
                {companyData.headquarterCity.value},{" "}
                {companyData.headquarterState.value}{" "}
                {companyData.headquarterPostalCode.value}
              </Text>
              <Text>{companyData.headquarterCountry.value}</Text>
              <Text>{companyData.phone.value}</Text>
              <Link href={companyData.website.value}>
                {companyData.website.value}
              </Link>
            </Flex>
            <Flex direction="column" className="col-span-1">
              <Text>
                Sector(s):{" "}
                <span className="font-bold">{companyData.sector.value}</span>
              </Text>
              <Text>
                Industry:{" "}
                <span className="font-bold">{companyData.industry.value}</span>
              </Text>
              <Text>
                Full Time Employees:{" "}
                <span className="font-bold">
                  {companyData.totalEmployees.value.toLocaleString()}
                </span>
              </Text>
            </Flex>
          </Grid>
          <Text weight="bold">Description</Text>
          <Flex direction="column">
            <Text>{companyData.companyProfile.value}</Text>
          </Flex>
        </Flex>
      )}
    </div>
  );
};

export default Profile;
