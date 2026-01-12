import { defineField, defineType } from "sanity";
import { YoutubeWidget } from "@/app/components/widgets/YoutubeWidget";
import { FiYoutube } from "react-icons/fi";

export const youtube = defineType({
  name: "youtube",
  title: "Youtube",
  type: "object",
  icon: FiYoutube as unknown as any,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Youtube Video",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      url: "url",
    },
  },
  components: {
    preview: YoutubeWidget,
  },
});
