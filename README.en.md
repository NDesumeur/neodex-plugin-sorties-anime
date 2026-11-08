# Sorties anime (Anime releases)

The anime release calendar: every episode airing each day around the world, not just the ones you watch. Follow the shows you care about to get a countdown to the next episode, their releases in your NeoDex schedule and a reminder 10 minutes before. Air times come from AniList.

*Version française : [README.md](README.md)*

## Day by day

- Every release of a day (adult content excluded), with the time, episode number and poster. Change day with the arrows; **Today** goes back to the current day.
- Sort **by time** or **most popular first**, and a **only my anime** box.
- **+ FOLLOW** adds a show to your list; clicking again stops following it.

## My anime

- One card per followed show, with its poster, the next episode and the time left ("in 3 d 4 h", "in 1 h 30"), or how late it is if the expected episode has not been announced yet.
- Two groups: **This week** and **Later and announced** (folded at first; each group folds with a click).
- On each card: **Open** its page in a tab, **Hide** (remove it from the list without forgetting it) or **Unfollow**.
- Hidden shows are kept at the bottom: **Show again** or **Delete** for good.
- The list updates by itself every 15 minutes; **Refresh** forces an update. The top shows how many shows you follow and when the last update was.

## Schedule and reminders

- **Add my anime releases to my schedule**: each episode in the next 45 days becomes an event in the NeoDex calendar ("Title · ep. 7"). Events are rechecked every 5 minutes and follow schedule changes; a show followed under two names only appears once.
- **Notify me 10 min before each episode**: a notification with the poster, "Out in 10 min" or "Just released". Clicking it opens the plugin.

Both run in the background while NeoDex is open.

## Import a list

- **From FRAnime**: the plugin gives a command to paste into the browser console (Ctrl+Shift+J) on your list page. It goes through every page by itself (about 3 seconds per page) and copies your anime links; come back and paste them into the plugin.
- **Otherwise**, paste a list of titles, one per line.

The plugin then looks up each title on AniList. If AniList rate-limits requests, it waits and retries; failed lookups are tried again an hour later.

## Data and sync

Your followed and hidden shows and your settings (calendar, reminders) are stored by NeoDex, backed up and synced between your PCs when sync is on. On first launch, the plugin picks up what you already had in NeoDex.

Network access: AniList only (graphql.anilist.co for air times, s4.anilist.co for posters).

## Install

In NeoDex: **NeoStore → Discover → Sorties anime → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
