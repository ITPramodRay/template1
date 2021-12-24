import React, { lazy, Suspense } from "react";

const AppDownloadPC = lazy(() => import("../../common/AppDownload/AppDownloadPC"));
const AppDownloadMV = lazy(() => import("../../common/AppDownload/AppDownloadMV"));
const Footer = lazy(() => import("../../common/Footer/Footer"));

const CardHead = lazy(() => import("./CardHead/CardHead"));
const EmotionalMentalWellbeing = lazy(() =>
  import("./EmotionalMentalWellbeing/EmotionalMentalWellbeing")
);
const ExclusiveFeatures = lazy(() =>
  import("./ExclusiveFeatures/ExclusiveFeatures")
);
const HealthArticles = lazy(() => import("./HealthArticles/HealthArticles"));
const HealthGoals = lazy(() => import("./HealthGoals/HealthGoals"));
const HealthScore = lazy(() => import("./HealthScore/HealthScore"));
const HealthServices = lazy(() => import("./HealthServices/HealthServices"));
const Others = lazy(() => import("./Others/Others"));
const PhysicalWellbeing = lazy(() =>
  import("./PhysicalWellbeing/PhysicalWellbeing")
);

export default function WellBeing({ ...props }) {
  return (
    <>
      <CardHead />
      <div className="base_card_We">
        <Suspense>
          <HealthGoals />
        </Suspense>

        <Suspense>
          <HealthServices />
        </Suspense>

        <Suspense>
          <HealthArticles />
        </Suspense>

        <Suspense>
          <HealthScore />
        </Suspense>

        <Suspense>
          <ExclusiveFeatures />
        </Suspense>

        <Suspense>
          <PhysicalWellbeing />
        </Suspense>

        <Suspense>
          <EmotionalMentalWellbeing />
        </Suspense>

        <Suspense>
          <Others />
        </Suspense>
        <Suspense>
        <AppDownloadMV />
      </Suspense>
      </div>
      <Suspense>
        <AppDownloadPC />
      </Suspense>

      <Footer />
    </>
  );
}
