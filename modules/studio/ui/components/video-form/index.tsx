"use client";

import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Copy,
  EllipsisVertical,
  Globe2,
  ImagePlus,
  Lock,
  RotateCcw,
  Sparkles,
  Trash2,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { VideoSchema } from "@/modules/studio/schemas/video-schema";
import { Visibility } from "@/modules/studio/types/visibility";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VideoPlayer } from "@/modules/video/ui/components/video-player";
import Link from "next/link";

export function VideoForm() {
  const categories = [
    { label: "Gaming", value: "1" },
    { label: "Educational", value: "2" },
    { label: "DIY", value: "3" },
    { label: "Tech", value: "4" },
    { label: "Anime", value: "5" },
    { label: "Movies", value: "6" },
    { label: "Beauty", value: "7" },
  ];

  const form = useForm<z.infer<typeof VideoSchema>>({
    resolver: zodResolver(VideoSchema),
    defaultValues: {
      title: "Untitled",
      description: "",
      thumbnailUrl: "",
      category: "",
      visibility: Visibility.Public,
    },
  });

  function onSubmit(data: z.infer<typeof VideoSchema>) {
    console.log(data);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* section #1 */}
        <div className="space-y-8 lg:col-span-3">
          <Controller
            control={form.control}
            name="title"
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input {...field} id="title" type="text" value={field.value} />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            control={form.control}
            name="description"
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor="description">Description</FieldLabel>
                <Textarea
                  {...field}
                  id="description"
                  placeholder="Add a description to your video"
                  value={field.value}
                  rows={10}
                  className="resize-none pr-10"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            control={form.control}
            name="thumbnailUrl"
            render={({ field, fieldState }) => (
              <Field className="w-[153px]">
                <FieldLabel htmlFor="thumbnailUrl">Thumbnail</FieldLabel>
                <div className="relative h-[84px] border border-neutral-400 border-dashed p-0.5 group">
                  <Image
                    src={field.value || "/placeholder.svg"}
                    alt="Thumbnail"
                    fill
                    className="object-cover"
                  />

                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button
                          type="button"
                          size="icon"
                          className="bg-black/50 absolute top-1 right-1 rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 size-7 duration-300"
                        >
                          <EllipsisVertical className="size-4 text-white" />
                        </Button>
                      }
                    />
                    <DropdownMenuContent align="start" side="right">
                      <DropdownMenuItem>
                        <ImagePlus className="size-4 mr-1" />
                        Change
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <Sparkles className="size-4 mr-1" />
                        Change
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <RotateCcw className="size-4 mr-1" />
                        restore
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            control={form.control}
            name="category"
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor="category">Category</FieldLabel>
                <Select
                  id="category"
                  items={categories}
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* section #2 */}
        <div className="space-y-8 lg:col-span-2">
          <div className="flex flex-col gap-4 bg-[#F9F9F9] rounded-xl overflow-hidden h-fit">
            {/* video player */}
            <div className="relative aspect-video overflow-hidden">
              <VideoPlayer playbackUrl="https://placeholdervideo.dev/1920x1080" />
            </div>

            <div className="flex flex-col gap-6 p-4">
              {/* video link */}
              <div className="flex flex-col gap-1">
                <p className="text-xs text-muted-foreground">Video link</p>
                <div className="flex items-center gap-2">
                  <Link href={`/videos/1`}>
                    <p className="text-sm line-clamp-1 text-blue-500">
                      https://github.com/WissemBoujlida/ecommerce-admin-dashboard
                    </p>
                  </Link>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => navigator.clipboard.writeText("url")}
                  >
                    <Copy className="size-4" />
                  </Button>
                </div>
              </div>

              {/* video status */}
              <div className="flex flex-col gap-1">
                <p className="text-xs text-muted-foreground">Video status</p>
                <p className="text-sm">Ready</p>
              </div>

              {/* subtitles status */}
              <div className="flex flex-col gap-1">
                <p className="text-xs text-muted-foreground">
                  Subtitles status
                </p>
                <p className="text-sm">Ready</p>
              </div>
            </div>
          </div>

          <Controller
            control={form.control}
            name="visibility"
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor="visibility">Visiblity</FieldLabel>
                <Select
                  id="visibility"
                  items={Object.values(Visibility).map((visibility) => ({
                    label: visibility,
                    value: visibility,
                  }))}
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a visibility" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      {Object.values(Visibility).map((visibility) => (
                        <SelectItem key={visibility} value={visibility}>
                          {visibility === Visibility.Private ? (
                            <Lock className="size-4 mr-2" />
                          ) : (
                            <Globe2 className="size-4 mr-2" />
                          )}
                          {visibility}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* Save button & delete drop down menu */}
        <div className="absolute top-0 right-0 mt-18 mr-2 flex items-center gap-2">
          <Button type="submit">Save</Button>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" size="icon">
                  <EllipsisVertical className="size-4" />
                </Button>
              }
            />
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Trash2 className="size-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </form>
  );
}
