import StudioHome from "./components/StudioHome"
import type {StructureResolver} from 'sanity/structure'

import {
  BookIcon,
  HeartIcon,
  CalendarIcon,
  TagIcon,
  UserIcon,
} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  
  S.list()
    .title('Pastor David Ministry')
    .items([
      S.listItem()
       .title("🏠 Dashboard")
       .child(
      S.component()
          .title("Dashboard")
          .component(StudioHome)
        ),
      S.listItem()
        .title('📖 Sermons')
        .icon(BookIcon)
        .child(
          S.documentTypeList('post')
            .title('Sermons')
            .filter('_type == "post" && postType == "sermon"')
        ),

      S.listItem()
        .title('❤️ Devotionals')
        .icon(HeartIcon)
        .child(
          S.documentTypeList('post')
            .title('Devotionals')
            .filter('_type == "post" && postType == "devotional"')
        ),

      S.listItem()
        .title('🎓 Teachings')
        .icon(BookIcon)
        .child(
          S.documentTypeList('post')
            .title('Teachings')
            .filter('_type == "post" && postType == "teaching"')
        ),

      S.listItem()
        .title('🙌 Testimonies')
        .icon(BookIcon)
        .child(
          S.documentTypeList('post')
            .title('Testimonies')
            .filter('_type == "post" && postType == "testimony"')
        ),

      S.listItem()
        .title('📅 Events')
        .icon(CalendarIcon)
        .child(
          S.documentTypeList('post')
            .title('Events')
            .filter('_type == "post" && postType == "event"')
        ),

      S.divider(),

      S.documentTypeListItem('category')
        .title('🏷 Ministries')
        .icon(TagIcon),

      S.documentTypeListItem('author')
        .title('👤 Pastors')
        .icon(UserIcon),
    ])