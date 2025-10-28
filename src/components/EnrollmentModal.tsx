import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const enrollmentSchema = z.object({
  parentName: z.string()
    .trim()
    .min(2, { message: "Parent name must be at least 2 characters" })
    .max(100, { message: "Parent name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
});

type EnrollmentFormData = z.infer<typeof enrollmentSchema>;

interface EnrollmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EnrollmentModal = ({ open, onOpenChange }: EnrollmentModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues: {
      parentName: "",
      email: "",
    },
  });

  const onSubmit = async (data: EnrollmentFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Show success toast
    toast.success("Success! Redirecting to your free class...", {
      description: `Welcome, ${data.parentName}! Check your email for class details.`,
    });
    
    // Close modal
    onOpenChange(false);
    
    // Redirect after a brief delay
    setTimeout(() => {
      window.location.href = "https://www.coralacademy.com/class/minibusinessseries-c61a217d-9826-45e5-81a7-ff7cdca717b3";
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-2 border-primary/20 shadow-coral-lg rounded-3xl !mx-4">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Enroll For <span className="text-primary">FREE</span>
          </DialogTitle>
          <DialogDescription className="text-center">
            Start your child's business journey today. Hurry, seats are filling up fast!
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="parentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parent Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your full name" 
                      {...field} 
                      className="rounded-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com" 
                      {...field}
                      className="rounded-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full py-6 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-coral transition-all duration-300 rounded-xl"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enrolling..." : "Book your seat now"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentModal;
