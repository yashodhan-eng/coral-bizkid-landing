import { useState } from "react";
import Hero from "@/components/Hero";
import LearningOutcomes from "@/components/LearningOutcomes";
import CTABanner from "@/components/CTABanner";
import EnrollmentModal from "@/components/EnrollmentModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Hero onEnrollClick={handleEnrollClick} />
      <LearningOutcomes />
      <CTABanner onEnrollClick={handleEnrollClick} />
      <EnrollmentModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </main>
  );
};

export default Index;
