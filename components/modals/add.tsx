"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Context } from "@/provider/provider";
import { useContext } from "react";
import { useForm } from "react-hook-form";

export default function Add() {
  const openModal = useContext(Context);
  const form = useForm();

  return (
    <div className="fixed w-full h-full bg-primary/60 top-0 left-0">
      <Card className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[450px] bg-primary text-primary-foreground">
        <CardHeader className="py-4">
          <CardTitle className="text-xl">Add a Task</CardTitle>
        </CardHeader>

        <Form {...form}>
          <form>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter task's title" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={4}
                        placeholder="Enter task's description"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col md:flex-row gap-4 *:flex-1 items-center">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input {...field} type="date" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isCompleted"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <FormControl>
                        <div className="flex gap-2 justify-between h-9 *:text-sm">
                          <label className="grid place-items-center">
                            <Input
                              {...field}
                              type="radio"
                              className="sr-only peer"
                            />
                            <span className="peer-checked:bg-emerald-600 px-2 py-1 rounded-md">
                              Complete
                            </span>
                          </label>
                          <label className="grid place-items-center">
                            <Input
                              {...field}
                              type="radio"
                              className="sr-only peer"
                              defaultChecked
                            />
                            <span className="peer-checked:bg-red-600 px-2 py-1 rounded-md">
                              Incomplete
                            </span>
                          </label>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="isImportant"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Important</FormLabel>
                    <FormControl>
                      <label className="flex items-center gap-2">
                        <Input
                          {...field}
                          type="checkbox"
                          className="w-4 peer"
                        />
                        <span className="text-sm font-medium leading-none peer-checked:bg-sky-600 px-2 py-1 rounded-md">
                          Important
                        </span>
                      </label>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>

            <CardFooter className="flex justify-between gap-4">
              <Button
                onClick={() => openModal?.setIsAddModalOpen(false)}
                type="button"
                variant="destructive"
              >
                Cancel
              </Button>
              <Button variant="custom">Save</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
