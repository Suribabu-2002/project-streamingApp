import type { Show as BaseShow, Genre } from "./store/apiStore";

const dummyImageSet = {
  backdrop: {
    w1280:
      "https://cdn.movieofthenight.com/shows/backdrop/w1280/placeholder.jpg",
  },
  verticalPoster: {
    w720: "https://cdn.movieofthenight.com/shows/poster/w720/placeholder.jpg",
  },
};

export const mockData: any[] = [
  {
    itemType: "show",
    showType: "series",
    id: "12281057",
    imdbId: "tt19891306",
    tmdbId: "tv/241112",
    title: "No Good Deed",
    overview:
      "The sale of Paul and Lydia's picture-perfect LA home forces them to face painful family secrets — and hide them from prying eyes and cutthroat buyers.",
    firstAirYear: 2024,
    lastAirYear: 2024,
    originalTitle: "No Good Deed",
    genres: [
      {
        id: "comedy",
        name: "Comedy",
      },
      {
        id: "drama",
        name: "Drama",
      },
    ],
    creators: ["Liz Feldman"],
    cast: [
      "Ray Romano",
      "Lisa Kudrow",
      "Linda Cardellini",
      "Abbi Jacobson",
      "Luke Wilson",
      "Teyonah Parris",
      "Poppy Liu",
    ],
    rating: 67,
    seasonCount: 1,
    episodeCount: 8,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/12281057/poster/vertical/en/240.jpg?Expires=1766864683&Signature=im60J32r3bmCShsEWR-iNgM92Laq-~CjcnN0PtktKInfEUBp5PYT6x-EdoNuHyksAuj31e6rsNoho5vkaDRcNcVzP3SMKJzmjMSWfTCZSBzi4Z3Q2A2PNHJUSQV9P4Ws784coxpdhDrv7Kf9zKUFFMe6IM8mSnU5LvZ9P1KybA9ejGylBLv2RaTfaReE0Y8fK41JqfGSsFMfgtDsojGNv3qtSCYMOIlQib-gRBeK7aBNYmyvUFlNmBL0kvzgENRZINrsDuMCbBZmQYNWEsqZ8Bo-pepVF24RT5wH7KA05G9i~XrePF77gnG4gH7up6znX7cXJteJB78-muBS0iqQsg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/12281057/poster/vertical/en/360.jpg?Expires=1766864683&Signature=ADi0GPTdts5bMN9ocFAVWnhWNE2dPIFX3f~s3B4lXWoPFRUmELtgDA5UG79FHK44PWvCKmJy9ziGhw6zC4rJg9HPqzRpeYqKgVGOhsFR1HunEmIEXH7zk44XhjdiLyzHEOiNqF0Ln8pKRhPfxf9bIRTh-OnutA4ByjELc5Cs8~ysfPD4YX~yKPy4AAlnI4TQGpWSoxgFgZ47fBWszn7ICcIK-fKxoXjDV2zKECpAmivdBlElxlhSo~QGs4mcoybkRCSjgG41nAQGNU~NyG~-1X096P49emkntEFSdwAgvu3FbywlkQvlm-Z4ty2ET8gXfBZfbmAGVWfI5WZHOuaDdw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/12281057/poster/vertical/en/480.jpg?Expires=1766864683&Signature=a4jDG8CsggwdE6asyNE-Nalq4FIDW7I-ypFmGwRreGfZnyhKUuSG5lQhwEix-nMyEhU~oltbLsgxRImoJC5-dWR7GsBcX5sB6~Kg7N3VmH2a~dIQQq2oofqGyiDiF070j2NPpdlE7pJkucVc16rQPbm6hRJOjHupm2YNCF7CIdOTtpwl-Emg9Ik302R0iYOduEXIuKLIGPLEjUfYRQPvaz~cVUrMru6TkeAUFewJuDAU8psW4NiK4QuzAY6~TKhPIspEWeTqNrBIz6zPMRczAI36x2YdgKI84tL1hZu8eLBDz6uvHMBmTtkn4OqREGOUxM1ubUeqSScoPCiTtNcCFw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/12281057/poster/vertical/en/600.jpg?Expires=1766864683&Signature=Ef4--5HjofpIS30I9xKeUt5Vh35NYNpqyKuF7ipOOl0QqsF6uwq9ttueDhVA3FyCrsId3uuBqvejaF1u0Ms5BDzhAmVXjqBMTbrA5SQKmv1WW8EDM4WOlS083Gmy~DLLc0OpKO4aMtkGSCCiDM6tUj35xx7faItqZNB~fS63tlG-JUJl1EpJxM1MLmjXcGznE1IkwTp~5hOZ3SvBJPoBrXCIP02T3Mwl023Fys0bWm2yz3n6AgLBkPC4jdBzKj5iNpGRr6ssn0mAcF5f4pWiQYvltAqK1sqAUvy7hGzzEDXrjsaGQpGXeILNEIb0V~qjueXU~YG3b24aQUB8D-F4Ig__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/12281057/poster/vertical/en/720.jpg?Expires=1766864683&Signature=RwmgEekLVAEyX4cJOKam0Uu9Zrp8ANpMJ8Ldiob70XFUHRI6FAEz3oitptB-a4TYbAsZBv1F0eYU698u6W6JssHDv3zrsiJ9q1zKzxuY9jEI7GtMj8wWqqAMvn3-Mpl2e~GKDehOTCUCUw4iFSa7COu0W-u9tnT5kPx9rE04EFFmH7PUtRKFs0WawyuGG1BMZa3iPA6l7OVP4uPwObBwO6LZwiiEbaM92Y~3f2Gbl97Px0L0KxrgjIqmLT0E98pCLEqz2uc5Qel94edQPHzZ4IKi8c~bwYefUmMPKzp6eRWRqb9Pyc2ruvF-Fm7ai~uryZdvtgoQcEZ~XjwBCPgAJg__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/12281057/poster/horizontal/en/360.jpg?Expires=1766864686&Signature=bXTdfaQb44qKInMQgk1ZDM9rVW7aYvigf4FWA2OAp5GKTwoIYZHJwyLv-YjkrhRsiniyQL8-YPfU~orxWVGC6X7x1Z6YJE36T~1UiHsxYa-FVOIodFPT8bpjCl8UNa7urtB-lbx6qabNgPbgK0tdZU-hs~4UHBVd6nVCWzicVift3V0f-Z9aIT9iP52~uM3AymF1VVSaFzGhP-OBSTShDb4WwfBjxr2ymNAGq5UCCGO6HuZHpdoVnvoJyoVxyQAqZoJG5HNkdWOcOXcpng7v~RLqC~Uz2TTeUudvWkrCoDT-77BpW~OrcN-phN3lrDa9jo0JejwZSNtccBS5aenKmg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/12281057/poster/horizontal/en/480.jpg?Expires=1766864686&Signature=aKHmetQqhK1BMoschnO4D3YIms0L4y-qryBak8NyU~hVS4qxLruuak83ld8Q2rVpWcRbS93LOaHakIby-VJhd6uzBi2erlqyYv8KanAzMpZ2NnNpJyD~-9nssccDRoL7sJyHNkmipxB1Tz4Nc-lFbJHBwA1Hovqse3WFS7WT6YZuhNrUJijUfC4pG0bgyhS-cw4Zy5F1fSTMTkkSxpmkxJJu6oUKmxtI81gRREkMvFf6WZKQbvgGRuYeyzG-EL1vv~nZ4zIzTC4NR2E0ihvT7LCmMqeOFupRQUZvmyU-7iC14BGUkmhCVQZQdBlFY9M6m7OChLBxpWUUGvM-gAWPRA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/12281057/poster/horizontal/en/720.jpg?Expires=1766864686&Signature=V5m5r95jYoKYiJBiELEKXqkwEHmPE2BAGtDAUqfMr-SOutX3ivOAxNe-myu8ZBwopEBnLfzPITTpamGOV92efBuHtEnS7Ea3G7RVrfFuQhByW-lgRJJFu5pmyQSbQTv7lZx41e5PoXmR7V9erU31K9kF~DZfAcDZ9He5egR1R7SJi8i5iI30VN1PmhWvxkF4IWTRr1ge5GxTrLVY1ZVoiOHhvZhukA1vFc5p-u9WdHMcru18JKLWKo8UYbiqAc3KipMfKMc8ttAGB2glLYNyS1aUhbg0qkYhSliuq6bJ49fd~YD5T7PoXvFVcR0vtyW1d3axJtyqT~4bqi4iKqwHWg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/12281057/poster/horizontal/en/1080.jpg?Expires=1766864686&Signature=GfzxYPNP4ajJ1OckkKGVSg0N23Jazh8n34T-z7NYMb5jB28OCM~i7Xf9DE87P6RCeznrgirmMW2nAEAhuzkEZSyXsvC94Vrk5FMu8YfiYhHP~PBPOmSk2UNghKEWqRCX0CjW9HBC8NkYLZqmMvIZbuycOUdpIn7WWqRnVJgJmzesOOielqRXsH3u1fp9uyuzNKNOOqtYNoRvdGgdFRib0ntxVBPv9yV0j4-9-NUkuf0OhTx-lpRhJE52YHZglSs2JcyBRNpnXWmm5VggafW5eiSuZAoZ8n0ixGeTP-OM6jn5G9paKIdKfZzXYyJ41Y8rVDNKKY25nSr3zryy0ioVPA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/12281057/poster/horizontal/en/1440.jpg?Expires=1766864686&Signature=jMAkTV3mgGxTWT64OQ5-TDMSfuLdEJcggSUYPkXJSXEt7X8sVMQuSXs87jVZSahqxXt6lp7~8PSAOOM6J3fJgsXoVa8TTUfFaIeOe7tcVM4-OHFIZgGLuml2T18tvSbygyHP8fcu-k6WgNXaSCBVvYr6TF4gVcexwgNLmpK1Yz8z-aD0M80zrZMc3QjQLajhiGTtdVRPD1Rz0zGTQ6TQT60wbWtvng7r1srMKS618ERtY4Ph2DN7PUgZc-epMF8N~q-upXJucnVO4P1EMYF095WXh~hxfOQvbzV54U7Cxv780ZCNDX55Qe9BrClI4q1kzAhvwvDXt0T-SSNF2yOibg__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/12281057/backdrop/horizontal/360.jpg?Expires=1766864680&Signature=AIxr5CiKZBKNOhCtEB6HgEMbguwCiUG~CrfmjXxBxHD~0-TDVM012PoM3Wd70DydfWX115fHUz6prhwC87bOj2aiZmsXH5ephTNgR55yfJ14MqBmLKIE4ROOr6ndIIhLa~L2FPx09rCwZYzKh914YovkF~weJTBfRcBnsdocnOlbxmuUfmnkEciHJjHSTlW2EG69oJJz6eG-Ig7Yu8jWA59jCg7t3bWssjaE8UqQyppvPLArYjIazZ9YxYygrIKV-57C3h9W3EvJcg~z6FPqtlqT9mcGDkjOwym3FCREDgDzMxcTTRXNSLfXqATS-H5RHpUESQH9xMNqPOzUUL5SVQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/12281057/backdrop/horizontal/480.jpg?Expires=1766864680&Signature=EX7jQfHWUtUnfvicZ1njrnC865TJew-lr9FXP2Qko5XbtHXvDcKhFH9fJ7w0MMurnQRIXGVL-cvZScLmJJV8oVJsEuM4BIFSckuSb2Ps4eOIEVQtgQEL8SC6RTGuq5QHNewxjJgAlsmzB3FXh2W7KA42hTUpYYpZbgh6NGQTJBxqB8~t7Z9UJviip2mEmjEPSKqzp3fAK5n~HpLaGc3WQkMwfLMffID8OMYCtyofSVDF3ukBReESXZeNUxv0FHGCax1lM0723lw3P7QorBZtwwv1cvhNHSOp0xfFR3MqcxYiJWYI~7ViHul8yLruKSlEmVC1~KEZpY9xgRzIyP0erg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/12281057/backdrop/horizontal/720.jpg?Expires=1766864680&Signature=e9bqbx9OskHTJUszc3qqer~RKyhvmEZJNo0WbY~8wPZfDhsLGWF-uk2rMRsEr05ZR~X43VTtVLL-nLf1Or49sj6UNgzpZvlkDJSc0dzF0bvheBqTFvcmM5Tzaiqmsn1HG2LwQx36X5hYkCVyKjiUM~f7qb-bdjZilpqCCaRS7bWTLYiaLGa6F5ma-eRO0YzvQKX0uhsv0kHNrEuFVCEwjh81offqKYkM4v5B56bgNDzMo341132yKHoezBWFearQvex5hIv65~LN9N96CnxmAIUykrTvXck~Qdlw6Yemn2SP9pq9FqpnDsEf2DgWKZszFaqQAk4fs43i6st0fuwjdw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/12281057/backdrop/horizontal/1080.jpg?Expires=1766864680&Signature=jF9XdOkoJ1HqHGZKv1GEjKM-uS7JGxqWktEji9jlF1xdAubRd5Co6wcYWznMBfAKLKS19sExNXfxJIES4lSK6a5uXdzte-OmgPDaYutJHZkuzMefGToF~5U4ETfTK7~JjgydXvce3YDJtA4ZsLv3BwoT7QjJuh8vwwl0A-KD8KgnrIMuHHBMNT4-9emdI7Kp~bRYtewdwQ1pIptSEttOA07DJb76Xqhi4BFjTq3uhBSgx9FE9y11uuwDPcKNXhXhWyyfJjyxJQCOOBtuasAX4bM0kXucvQ5gicBRFf3xModxC5oyhjm5Sc7Gx2S1ltYmDmgLtJfZKRpymtxUtclfAA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/12281057/backdrop/horizontal/1440.jpg?Expires=1766864680&Signature=TcvAY4z~zshZ0TD5Lug7UeihHzMENoTtdFaZsiDEz1VFnXppfepbz11R~DPaF3WnRj2Qu-67Snjtds37KmCKjJSMvd~CYXfxKp7ILMbI-EJntBPTqspmaQxtQ2Qmf~qK74HPPP~hVWCxDRwFXwks2oLZEkiURTSE9o4KAhNPvvkINHpcUaCRZie-Ud3bpbE1DseTdb0-JGXkA3WfivsyqFILJOGeWNtnh6c4aOLqG6l7PGVzJn6QTa7uVjmIPi~9UaLl8UQpEQwbRTz82BsynHLBBR1JGytIfiuus900DCXJGF46HWs8wwgc~G-AsiWnSzLkBLbeTA78addLa41abA__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "netflix",
            name: "Netflix",
            homePage: "https://www.netflix.com/",
            themeColorCode: "#E50914",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/netflix/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://www.netflix.com/title/81557196/",
          videoLink: "https://www.netflix.com/watch/81557196",
          quality: "hd",
          audios: [
            {
              language: "deu",
            },
            {
              language: "eng",
            },
            {
              language: "fra",
            },
            {
              language: "ita",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "fra",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "zho",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1734195410,
        },
      ],
    },
  },
  {
    itemType: "show",
    showType: "series",
    id: "11541",
    imdbId: "tt18396952",
    tmdbId: "tv/169588",
    title: "The Ultimatum: Marry or Move On",
    overview:
      "Get hitched or call it quits? Couples put their love to the test — while shacking up with other potential matches — in a provocative reality series.",
    firstAirYear: 2022,
    lastAirYear: 2024,
    originalTitle: "The Ultimatum: Marry or Move On",
    genres: [
      {
        id: "reality",
        name: "Reality",
      },
    ],
    creators: [],
    cast: ["Nick Lachey", "Vanessa Lachey"],
    rating: 55,
    seasonCount: 3,
    episodeCount: 30,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/11541/poster/vertical/en/240.jpg?Expires=1766862062&Signature=Y--P6UusoUyWWXdSV07hXcD~8vRjTUQNXKeLBO~A~1IBerVMghkUgS6eroVXfn~b8K6LzzcxEwwrc7MxC0Eyf1KhNQ4C9Peez~mzspFtwF7leKJJLypZCxEdtofgSVqIoDd7Jv6sBIfJVgZyVQ-2e~YTIEwxa7i4GFQJTsywOW2vBCBJwf7jI6g4jtSi8KaxXfTKw82w9oLyE2z9xtIupQr5WvnzOESekbRL3Jp9ZYjDA7yzAnCaV-lswMvMsdVEYA-PcbpOcpiBDYy81~59U-eY-61kmx~f07hEg-rBhGplb2TkN0CV3S33xdagxIDyVwfnHo7Re1SANbZaWM4r~A__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/11541/poster/vertical/en/360.jpg?Expires=1766862062&Signature=dNoT-StwWUcU08K6Oh1shfi9R1K0NuBpIBWCsbuzrgWSKKyzK8QZonX2fulSG05aXNExciwOCwSSo7tFqTrDZAhxmt-uQpixjHHOM8wkwOGHZusws3CMiKHJvKuJuMoghmqVygk3wgvbfP19qvwSXKb8gdKsxKLTdbWJ11oPB1PIlu2XLUhddcVSC7~0wNcWxSYwGFuoJAx~efAUOs3fHvbU0g8UJTHjCKtUPhTtFjFM~tevZnP0dBGujQKEFHITlXAIh9C5HmTelJPYTaOge-CxPjL~~dDu-Eo3I7PSzE5i1z3D3RWC6AWVlSpERgevQQ25G7-Du6agoPXTtd5pEg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/11541/poster/vertical/en/480.jpg?Expires=1766862062&Signature=NZfYEWPoG8gtHAgYkvONFGSj7pFP-RXXyu~Gb8wcH8brRu-OggQ4bCP610O8FcwjLO2BKX3de2j4h~0S2vzqIlEErl3Hu3clmWgQVUM7phd17c17AvTZnqzACV2bokU2m8m8XlV4srUXp0MzLV6JIgDANtKsa2-g5zlPUFaoLV7Z2bRJb~yVx-5AsT5VLY66Q7vlI3RR0yog9zuvNDnUG455KOOLMuv6V22ra6nPT7R18m7wqD0AAf8hshjuivab~A~hRQKIeTzIaFxJYoRb9Xkgs5DdZLDD7yR40zp9jC03RsCAL~sZG5Pg~LD8xgYDTg2PtWXsikA9HJHGVHxEEA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/11541/poster/vertical/en/600.jpg?Expires=1766862062&Signature=GTnqmW~LasrZgyLcwJmL7-1xdWiDCa~2xOsVTwy2awPiQVYd4nAMcDqvN0iRp7gCV5wia4jH~bnpS~9LwdIe4xH6DFZOpZC9ixLmlSuBWhsb02wBtgz8NRjBX~iKvLseEZjmLEcSf1j7hzzCCELL91WBmqTk7Ecjno352~eS~TLdnv9ELbTH1W0HJAuL9~rAPWhDg7L8AibgZB-lSyg~-lg4BWFNms-thqzkzPbav-YSwfxqb9TviHbndSA3nwbQVVI5sGVvs6jOQ2sUwB2LiI0Bv9GJUjJloLN8RBMVA42cnU6UGULJ8tH-pQDY2O5cVXlfHGJYYN8K~yH2dFd52A__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/11541/poster/vertical/en/720.jpg?Expires=1766862062&Signature=FqhUs8prtwbyH6IVFBNjjLYySu5aPtZ2y-ZGah316g5gamd7WfLgYnzdr8Ys46SuYKJu~q2qNCE6nUJFUNs4aUuepu5hxUrv4NYg16SWcGDc3K8tVRLz7FiCfJKv8BSO4crYxbxsj-XszAeoippIt4UMhyRqERZ-eT4wm94pCmSZGXzEZEQZK-8nEKIlEon0enegV-E2YmaTfyMst8BTK8u-FFN11BqIeXLCsjZ1zbzvLY6ZU7wbzsS6biKqqV~jGTpZ7qWIGJrehIYN-PUYhIIU7VoDQM~q1CeT4tp2KhhlvWB16sdGelM5VN15qGPkYkXhkXzzf3bGykhZPLO08w__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/11541/poster/horizontal/en/360.jpg?Expires=1766862067&Signature=QvoY95I4LF3vvC0kHWFXZQJBosKIhXtoQ0bc2XZJfelY4Quz0rhP6dxgWAJfo8Kughv~taxW60yertsnDtK3zpqk~CZ2-LsR7AQEh3bQxJ7Sskw1RgFmBEkJHsDbCPMa0fGJxcb3udWfBYRJbHl5GCDgeFYVD3b2T0DL8kmqESF0iHPX06DExrINTVZg~SnuNRkUIEoop~3j7LUtd4CKlm06rZUE1-zjuN2HFjEHMs6q50zMaIPbqygeoNxFhMqfRE-3G9o97QSS-t1qJP4E5Pzc1mZ5xMQy~XiUq3jy2B8oirIqqK-EcuZ1tQo1jeqw25rdw~rdHyCqxJLkFZMP2w__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/11541/poster/horizontal/en/480.jpg?Expires=1766862067&Signature=cu-89MA7Dqk~LGFQpaVYrPPe01eRXcgRLY1nckjg~bmwJSTk7LiBx5T4p2Nb7Sjg~o7g5KXF-0ISSw-JI8SeF63XRgprKsGjDf7e58Q-CJkZw-NhrY8sFI5ckfuQ6Lsq9~TxhsNJOp5PDbSTcvDwtJUOV8kKzpXArhi8JjLZB0ghjwsfamQ3BoufLiYtH3dPoo1UxASNYliWnrS3I5MvZ36iNrGi3E4~ZTQcN2kIPSvAii77hojs-8px5q3HbJ9uMG-3wNmdv0DO~Twfdz1YicMDz2YRk3B54l9gw1Rwep2JoG5uyCp6TpY0EGGZQvUaRpQdyL3whkw2vH0a5rHcnw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/11541/poster/horizontal/en/720.jpg?Expires=1766862067&Signature=Ue6uD1dCy16iPqiRAtxGhHyOWRUClu3HSLNVcl6jOM8sj778x08e4QEPXI2leboK9S69EWItHd8v1SqTvG0MQtMjRF2u4bPqZgrvLQUUULhKnbmtqCpAam0ES6i~f8dd6INEVSxNKeLgZJIv18y6b0dj~C4l4DHxATzlEOnlLFqqcFyZc1eAsdTn6oc-xl8Ax2L~oi4L4s353re5iT7CpoQRl1Yd8UeaHazcjqc8ZovsQm3152jnSa8JdrpzNZxLthMGnMXl7-CEd~8QjgSb58ErXwhOwLyNmCEO59tPH~6fvXU2p-XHhQ7Ug1VEBEERGzBiYmwstHJTE~jDjdxgEg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/11541/poster/horizontal/en/1080.jpg?Expires=1766862067&Signature=fTxMutkAYQLxHCZLguozdcEE5qdjRUNXGPNFVuLA7tb3rcVUTzQ~BOVRCIpdWIJ8zxov6-zmmBSnPsF-TTASdr2TrlYrADnQgfQH03SkS-0zkZpUgpgOWo1aQ7t1gDER093CNeQzZQlhER3hB~kXKeiYSdLxzI-HH7sp7BS8lZeaIr7n4OTgAfT8lG7qwFIhMzimfOtpRGw9tE64j9nf2Xog~NNqBsb2XBiJydTYdGQa7GHZNKaLO8ra1OYZ~TN-VHI3NwsepZMExgKqjUOKd3SfvvzrGyrx5iHDdngfKXPtz~J5GHv8UfPdtTav05kv5FoP-0enB2iYDmfCoDDKgQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/11541/poster/horizontal/en/1440.jpg?Expires=1766862067&Signature=TUfET7falpNZ-ajHihZTzHH~3rzt6E8azTOd7o2zBBPRbGcTuwwSEzonyppSxzqZX1uwuyoMmjkOuOnTm4M9MoZ6spGj9t9vTVLVKZ2niyo1xStJVbGRJsq-L~gUuV5c4Gc60vq6EQkxYSn1wvr4V4k1o4N9r-i9Zbq1uEB61jzTdOCmAzwToO-r2p1AMI8qxgswrBXSXiYLmb6ftkZiGHrEJP24gktkd1M-skQ8K4iQbJ1FvHazr3AlUOhp5A15hiPJ0hG4tJ6S0aPxq-XJ5QJ6xAuinkXGDDWIetATfS-eursNURCDaEoxhmIkxBOp6-vwk1yzutnGeC4PJqvnBw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/11541/backdrop/horizontal/360.jpg?Expires=1766862061&Signature=g0bqpzlg1xgN6z1qHu0smBtk-Ij2rMUPDF5mM6FoD3Jt4tPYat56oy839tKa3KZBbHesYMYt9ypEb1v9rICfDzRLHOyxmgBav6j0G4y~5LQv~fMekBljBLT4yYdOigfAoYYgHXT4U8VdOZhP2tTHuoiwBoQ6O2Dn~tI6o0NzbSqdB~5zf5QbBDZoDmpIu6LxAat8GzBocdc6PKHEW1qYfdVymF4~B3x3PR5ZyitcPvk7QrDPEutfjoC0eH~8ez7uPp3NfhISWzah~WkNsES3GAFHbchtrMuOxvj3YkqnT~n1wzbMs8cijxhVXrmRWmxHYtWhLi5Ao0fobAmMWAJTLg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/11541/backdrop/horizontal/480.jpg?Expires=1766862061&Signature=lOmPRxsURAU2FFRCfi2dxyAdjTVdCyH9s01Wq0tLcXCQ9hQIM6DziQmbY6qw1xGDnnCLoIAS6TlOVGgFQlytoWhpBxkUKzlpopGhXJ-AE9hG2sD8amRECnNt9PRqFJVD1Ya5~kA2zZ27QCdJPNy4u7c-HloTbbvkRZw6w468hXglqQWDSx4tv7fw6MTUGePV5grXqe7-8JyXBoWAbEMJ3cTG-~kc4JYVQgAmPCOmTH1qN2Veq3hXCt7wnzbSNepzYatRinMYJR0G8vD-ACraBQLiFpA0PypeCiHJwbOwTtQuNW8QP0h~bZII-8QQEx-s33M9tyux5MP4YDp5Kp4h8g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/11541/backdrop/horizontal/720.jpg?Expires=1766862061&Signature=dLRt3WKB9dYwEkBNP033n-Z64pKBhaEMT-isDybRstyUirEpii3vZnEIh1UMFwMVbtxOmFDz4Y~9BlDOLBMNV2nnQQyqlmLHUgxzWkldunEtK-iox-GKqSp3aS~4iUauBvf~NPgxSJgdTlyFe7u~0FeCvqgRiSlp8o9R4u9DUx3d3kxUVBboqHxM4~kCDyK0pVsERLx8w2ktIPVvcBDJqJAipGMhKhpCJQ3yG7yK7c2VkiTxFwdDwsR4A9xEl6-ocJyzyMoey059ZlIH7Eyzlgrq20yfbNR3maECiLMmZe1a2Nw3E7ApZ1XbMfqVzj9ikxZ4zUy3NooWTYwz9T3oLw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/11541/backdrop/horizontal/1080.jpg?Expires=1766862061&Signature=QrL4s~~x0qdkakeNcpQcay1P9h9Z1s7lwz3BdiLKiInaW-cHWkmaUtdPmxNZl3Mg~eVG98oLgqEEWppBt-8O4Q5Yr04Kn1nlldRTkvSHqix5Ao0d6wDbfWpOD5Q-6OMMNHhFu~o4FU6uKUxOH09aTCkqDLEQNGTv2MMLdbdwMJCGXw2cUqYNQczPmEaZdQF13GY~HsQ~JRUSuI19Bc~ritaLeQXcFETKKgisluSxld-qWtVF6rliOfqPS~SSbFYCQr~O6rYRocHUg67fb7TkHDAJwKx4uBnbaq04UsOywUVov181TceXkbvuydkGpPygN4SeFrxjHm3sWfcXC4Tv8Q__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/11541/backdrop/horizontal/1440.jpg?Expires=1766862061&Signature=cYmSgRGTzmPWLTcsP5PycGFISPW0tcolxfBuOoCBPnpsdtZnN6R1fk6Hw5iREwUNPqry9WvOt8P9qzzm6PCNDftPaFKzSQBoKcvzNj0jnd4mO0XICY~ChxqQdia-K4QxrmQfaf4tiUNOd4h7XTEGIUOqtMLkoyxfCWM9Y0FyyxdZ0yU~E7smuJ88~ngryBX4g3UA-FeSklOleBnIoHIr4w6trbITUlddINS~Hh71uYXU6BXBNnjug8VFhD2Td2DWTiiuG4gmFb74SVD9zk3hMeZD98wYg2XhMjtqnbbipN8QQIJ30vS6JkxWgq3am6zSIz6dh5ZnNIy5PxzPFL~aEw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "netflix",
            name: "Netflix",
            homePage: "https://www.netflix.com/",
            themeColorCode: "#E50914",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/netflix/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://www.netflix.com/title/81292203/",
          videoLink: "https://www.netflix.com/watch/81292203",
          quality: "hd",
          audios: [
            {
              language: "deu",
            },
            {
              language: "eng",
            },
            {
              language: "fra",
            },
            {
              language: "ita",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fra",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "zho",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1653788285,
        },
      ],
    },
  },
  {
    itemType: "show",
    showType: "series",
    id: "11262664",
    imdbId: "tt33350486",
    tmdbId: "tv/270973",
    title: "Aaron Rodgers: Enigma",
    overview:
      "Follow NFL quarterback Aaron Rodgers as he rebounds from an Achilles injury in this sports series chronicling the defining moments of his life and career.",
    firstAirYear: 2024,
    lastAirYear: 2024,
    originalTitle: "Aaron Rodgers: Enigma",
    genres: [
      {
        id: "documentary",
        name: "Documentary",
      },
    ],
    creators: [],
    cast: ["Aaron Rodgers"],
    rating: 51,
    seasonCount: 1,
    episodeCount: 3,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/11262664/poster/vertical/en/240.jpg?Expires=1766862915&Signature=G7lo-UEdVLZOh7Wce~9boKDEjkATizAFXghFpJH8mowptdg8PzG3It7JNmk497710DW9PVT4AxfahCLlYDzsAr45L1iWFDBAm9FDm-paKfO2pI8pxccbxHRrJYXJbIxQewSODvXgCUQJN9F03lg4PqVzLx8f4Fu1AB~OUnkXk1JAr~Ubog5XX4TDDqti862c9Mxfuxc6mGrjSQe6cJ3nhICWBS~Yd6V62wRwp97jDWw~hal7xA72QSp4D79PkbMKIkOmOQecfRNr1hEqtUIFIbfypYk3UQEjpL3YL4UtkytjwWn5XFlfJNWEcbpju6PWrAc9HCMbvuFGaW-IqbvR-Q__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/11262664/poster/vertical/en/360.jpg?Expires=1766862915&Signature=PGlhMUyG6Ye6A79cQNhU2geh025bNjbKGg50mVfI6sOtqXrCbHT3i1LWK5molkwd4mg~iJUV834kQmKSUa7A23YYwWfbbYBeY54p-2kwGMevyhL~hWdsZrkm9W1fL~Q5XJtQS0yQVoxsQ76OmqY~Jh4Ac1a0jMFiYyj0XGWdnDhFi8F33bGrlcoWHPbjOsiL389C5uOTEI3NO95pJeVXw1gwkJY9rFROOhQmC9KKVZrUtzwcHe~Yy~Vn3PCAtHIL0UWTffrBzrB58cQrbMQEKfrnF3sc~w8xeNp~4jBs-fbG5Z6bMfGL2AZwVwsYGDi6HUxT-1KB0nJrSLrivMGIHA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/11262664/poster/vertical/en/480.jpg?Expires=1766862915&Signature=PYkE3GTmSQUiQnHuRUig8KBwUcTRz5t~IX8jCcnZzY40jgVdfh657y-3oCoP45CrZoAxgiGnQB6hnGjE2td8ZLzU4dBqRJtfyD500N904t3j8xweLRECMSN-MZGPQHK~egWIwm~PNP8nEStP4luSd~a7qkPD9U0qwIKztJduyb4AeSKdVpc3M0dUgmSgidXjYghWwnqXM~g~sCZlSLW2jnxbdqyYhswgTbklV9Y19dUogWRbV~8q3lkzoy3CRRcmtFvrCFyWP7hR~abqVbDerDMHsuGUq8acV7JtCNBnAqFn-KEItVG33egE1FL9YN5q6qxL4~4iCzB539TDo4lycA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/11262664/poster/vertical/en/600.jpg?Expires=1766862915&Signature=C-CnClpwMG23Q4USv7fmAyRPNamw5XaixR82xpoj1wL355KZWtCet6Xu1gwyxxjpXl3WLIKxUREvBQ52icg-9dccpYAUrJtkrAUgZHLoU68vw5hQZz3P~v~C~U26b-oBmXWPpDiD3eRtsRZHmKR8gxQCawni0dO7XmjmHU386aqw9wZQ6EA-eRzZwYD56A0daNTcu8n2FgmamEktQFr3hzIOd~lSLAp3WziRu8UQiZOkSRsRFhqv0lLUWYKv3rQMW4SzCQOC52exjs9zFzu86JV2hE3RZR8rsBJwtYc8f-lK~qZZjIJsJUNOXmFb8q4scy0U95qHnbHSl75J~gYAoQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/11262664/poster/vertical/en/720.jpg?Expires=1766862915&Signature=X8IhvMQsLd9pzYv4qSlPp3Cf6EKDLC2jYHtoEnYjAoYv1T~2XqS7UA3y2wbPpdvvjxC~Ng6QUM7LIftKGaYp-JHPP4gTn9nwlHE0JQk4-kqMU0mhozC8dzTMf10-7x7ZDhPLGmAtU9si3xWLmUxvrHmsczXzm5uA0erIW3t1CkidEUCLllFJofw2hCxxGgDzMibXoKnsPokpK40LDJSDb4jXznRCTYhAQCVb8mxlxiE3Xkx~1jLLTRiFGROTUkbZkfsmVPsGNw4D~4CP52PJX4oZywKvoQiNAVQueQqsdauR1OLR-F3azj5JdKGIR1QGMwqJ8hw5e0xeYyGCxgGSfA__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/11262664/poster/horizontal/en/360.jpg?Expires=1766862919&Signature=Sc3oH3aUH10Uu8bA0OlkxKuf47T0zDBuJfSa0cEoI1SIz6F2okrrQ9avvP~7X9br1uWfpjVbRRO-uRGsFFJ4degEX-a19V0DFFTu65gutfH0I4~aORQQ-xqE8NAD8CAmEBNaUwQTZdvRZRsb27faFdMu2S3PDASwmAQQ9VewOjoDoi2GdoweD-lu0gJs2zYDEPFtrWVWmvFHcH4UgmG4XlX-yGw-L4NJKxcIlnVvKrERIaLC07YGR9rTTOv0rRegoC0jUuNnAZBCdt9TQg11IsEjs6Omob4mBSAyeqFWcytb0GUsiINAcpxqsVKdpVTtfQF8KeZDShW3Ev1hGLrW5Q__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/11262664/poster/horizontal/en/480.jpg?Expires=1766862919&Signature=S~5ZsaFSndesXt1UyoTezCCs4X3lcBjUtzYRmZuuuXw1oUCTqLVh6Hp3oQc-Ep19~qK~RfXref6Ktb2KR4upiuZ0W5G04k~qw~flhQFYs61Ba0AgB9etG8r4xBFP4MzzmFt5euOLBm9L0nZZW8uGQ6eUy~0-mVaqTtbFgi79yq-EsihwL1OeaIYJR~~6T0TTwfR3jkxtR05sGovu9m9OXpqAK55ecmkZnPbDArdJDD~8Nkg9VLvMdU-flb38d1qvWkEKaLYYFbEmXGUj7k5PxMDtYhCUTjAwt1Dpi-6d~1Zk-4PoCFUOzhJ8Gt~hB-f9R9YqZuVMqcUeBOny-PPBjg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/11262664/poster/horizontal/en/720.jpg?Expires=1766862919&Signature=lxRDgf~0w-5EpVO8Pk2qHutkyItUUGYy5mejGTnf-yhFgzCiww2Ol5z5RV2FM~-R1TT8I4HGgwwSOsqqZ-M1CrITZFdnX1M6~zZ7U-~GnHBSo5JbHiOjoXjyEtq1st-4yGyYSHF9KDciHfIN09Oll1XNLYM-Xm80EcVJcb~3gAs-qLQnf776LfFbifx4kH9EGgI4~nikBcu4GFu7dxFC3ALPatSdWJLTaUCT7p6kaoTnCShsV2C~JIDI1HTTrGQXwNvVFYXe1YWAkw1WpVvQhtIuM8ZzzTOJV4cru92~gmngNkuC5yP-lOMIT6f7lp80lZmmlUWDjt487G6MRdRS5g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/11262664/poster/horizontal/en/1080.jpg?Expires=1766862919&Signature=kwR2-ddvbmnHTWsibCgbbkJ8pVmEZ3sv6JNteHdWchyl~QtBXY3I9nypBkaUthwHGh0xqNvr~IZVskSlg3VqNyTmSI0qoXiT0AORp1Xrey~6lZMY30k-YnVZkvJIP19dyKArdlt7x20jQ32ncgjGjH~2Rm51oTLiaLKC-NmlNHI7t~AAMNiR2pO6d8PFuzEuRjW0f-4K5G8JZ8qGJDMq4w9wr1A2doqnHwD7J~e6~~yzA2jIgy1PXWlLv9stsrSKk~0mVXyiJ0QfPlFBwSabEyUcRm~U1ohamYfHetj~dJs87iGN8KmggL2bXkalImdZTAJtc0feJTTUqt4XDMYOlg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/11262664/poster/horizontal/en/1440.jpg?Expires=1766862919&Signature=k9Fhwq0vv4phV6VYbE2fIRTl3z-4a~7SwZ90S5ngDGTo8v-3nt-KjGWJd0U7gV88I6Fo80QINZqoPMCA-6xz8dd4bPEhY1hqvWVxTV9UTvXVQtceaYwUgh3ZxReE~9btDY26PUZXRyJRYtbEc3hgNJNwZfeKtcSxq34Jsx9mJ651J1qInYJUOF1JgXyCmXO4E8cnxm84atFLD64lUji8cVKcEa0WhuC1dq-3axjO~Fw0EYIYer7ploL916Sw2RMc8bcgsC8~z1c0QtuuhvCysK7~bb3~nKvo6BnqIDedECIDUS-gVa9oKHRrnABlW4XzH00FH-Pg8xYcpsD40Ts40w__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/11262664/backdrop/horizontal/360.jpg?Expires=1766862913&Signature=PYAFSg6wf4TOZ~2sZYiG9-grW~a4Ty87~3wVS5fp1KbMUGWgsZ6bG~OKRCQJ1ef0JB1DhhG7x09Wm8Pvv-9JYWfs8jUfhnuMngStNm0BRb483YOok4cJOzfgFRWYL3REG6GnVGf7v-NZYhO~sBBSEYIqFycnOlJLujaL2DNguqaF08fKJYjfFCVfxjeEE-Q2SB7nv-TxvdSnqDUcOwsjcPmqgfhgBBOBjXSFL-viogX2L~Ozqq81DMsOUdkI9HbQLmgtsIhmUUOKguST2F3pA~dGOsbIzNAsAnoMI28rOGVy3T80Yd~h0Dzet-zaIkpA9rk~IZasn7CGVb4rIy~AMg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/11262664/backdrop/horizontal/480.jpg?Expires=1766862913&Signature=I8pRFd-od5Vjpt7IT-XyDf4HMyr655Y4eZuBfnmCfvxQ~f5vynVaJW1SNLXeOocDqWtmaS3qO8EHqSNPwmg52536KKemcus6pDXKsFjfcog0-MdQkbza0LwmFWEPD~YaPLKyOO1AXGFWie8107EmpW~9tK11kJ1Ui058Gf7Of~I2eZySwooBWb1MVyYf51FhWSV3y657Y5sNXhFsyiA7V7YI8PaUWBfdCgrhFjBCIr3zmEjp2oZT0G3NeYjg0U~Ba6ClMQP9Vjy7Zg306CSU0Z5hkLrjI4H3JKTjHpET~1ed6LINJ2M9CBzARk1AXvNmRB2dwGBpWZ9Gti~5hfXKRQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/11262664/backdrop/horizontal/720.jpg?Expires=1766862913&Signature=R~mV7WS4wQht7PPHrstZJMgvptBnRXBJ3mRS-cQqNS6GPOmQ38~OyH7U3BnX4a4LFCCbmIGs3jgTr4o9L9ftvy-rhc~QLO-ckO0Rt2DPjvta1IiJkZziyW4oBmFRd87N~OdpI75YBcYRXRABgMKAaPHH5A0W99~YCh-gus9sBSKAUmN64lwnZ7NKU3iCByMvSZYON7bdI8UWYkX~pXfipCBH7P9CoCdfW1Ab5C2mYnssfNoUe3rwcT5oqVH3NH6JYHnRsbIxdVltZTYAxx2wJ6fn7pb4~zfuLNwgKXByZkOlpV2WtKsTSc8ivySQXiR9KdQ46IzY-OOH0KwGksUeOA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/11262664/backdrop/horizontal/1080.jpg?Expires=1766862913&Signature=RWKeCgSiUWd1o4tzu70m0FJ6tmkT5aIYKvwn6g4Nq0Xg-j6IUxPtsIOlLFKKmrMrIFtDhFCAG1ogY5Lw6TiK9Oj8AF3joKgUhvBZ7nE~51IAlWitJ5P-ms-SZ7a81tlEh8Va0UgAvLLVPMsDs576wJH2ImnDQVmLfCDrpC9vApEIEMIlngHQBhchkvAJVprHZOa1Xck8S6reOurUfiK2pnlE-lNlK2Wp9isEK0pe2zYW29WqzUImtFzD2t3siCppRZE1Lk0ViqHLSDlyFnXM7CTwMzLc2tOCU4KOm977OeTCaMN01wqMrynHRap-ersO58MeuPSP66WW0~GEDLSw3w__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/11262664/backdrop/horizontal/1440.jpg?Expires=1766862913&Signature=jrS7xMBxRHWO~LJzCToBl2fPIQwzfA6eK8h~LKY-AaRmHbbhC8~T8eXejUfwRQFhbAes8~AlBYr259OG8CKgam62TR0KwCgwGAb5-3fP~8BdaeIWl8SNfZzt1qILPw9fvoGjDKh60~adrBRMOW6d2z7f7~uCJlPbXg3-6OhSPDvLXGJIn8x8tmuzK5R24ctyD1PkvqkZMfvqxm39JndJiPu49WppPGwN7OmBYJhPY~-vcvuJ7nimsz1NPL7NnR6lECwegQOjkKTAcFl1D9D4uoawi9F3RNyIpKFTIwXFDjg4Qp9o5TRyiVhs1vHqAwFKxsAqf-yDe-b0X0JgZ4-JQw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "netflix",
            name: "Netflix",
            homePage: "https://www.netflix.com/",
            themeColorCode: "#E50914",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/netflix/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://www.netflix.com/title/81757010/",
          videoLink: "https://www.netflix.com/watch/81757010",
          quality: "hd",
          audios: [
            {
              language: "deu",
            },
            {
              language: "eng",
            },
            {
              language: "fra",
            },
            {
              language: "ita",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fra",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "zho",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1734422737,
        },
      ],
    },
  },
  {
    itemType: "show",
    showType: "series",
    id: "13057935",
    imdbId: "tt27995113",
    tmdbId: "tv/225385",
    title: "Black Doves",
    overview:
      "When a spy posing as a politician's wife learns her lover has been murdered, an old assassin friend joins her on a quest for truth — and vengeance.",
    firstAirYear: 2024,
    lastAirYear: 2024,
    originalTitle: "Black Doves",
    genres: [
      {
        id: "action",
        name: "Action",
      },
      {
        id: "mystery",
        name: "Mystery",
      },
    ],
    creators: ["Joe Barton"],
    cast: [
      "Keira Knightley",
      "Ben Whishaw",
      "Sarah Lancashire",
      "Andrew Buchan",
      "Andrew Koji",
      "Omari Douglas",
      "Sam Troughton",
    ],
    rating: 71,
    seasonCount: 1,
    episodeCount: 6,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/13057935/poster/vertical/en/240.jpg?Expires=1769114301&Signature=EBD-MyCjad~UiLN1yidOVS~bLCOATbcchl3f2sKrgQSb-r6hrmoyW2rlehksYuvayfLguW0pGcc8NRmARTAWMx8BzWV3NqO8tQ5ABDzXbObVj2zjX6JHwEgFKbwZS-Cb9aeUEeK2L~vhA7arRITLShGqiiLtB5jY2GT2FftpB7gAjf9u3AW36nw~cC2w8mzAWLyG3T4Zm1OceDKT7OkalQbFSm~KrlyBoytTriJZTh3jMFJvYusPvlu4dd6P-O1UXBXuhbdwBNi4OeCQCmFeDc1S9XvIxePSvOYOEGrQzIaca1n85shunEr1dTNirsbCwzCRomCFevFCnSxwLV32MA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/13057935/poster/vertical/en/360.jpg?Expires=1769114301&Signature=E9ESc4WFRbJPAADlR9pMMy~GwzIjsd4y2MNhpRAFPSBnYwpZIbfY3II73DuJmNirHs2WDQLvOFNXd1vj6XPeWTO1vuNIlN4LxVhyLXOaFjdubpKW0aifduGZi584nnOxuuoiGgB4~MZC1atlbpjPTjoMAVfXVnFNaWhBl69rcWTHeQgCFrykDgijjHZHCzyPHp1hgehQJjFHmo-OjSalSJf4BfV1dPX~txpoANN33Lw6LlMBxPpaXiLzwTAVlavKE2YSLq~NW0K903wlz4wP7vgXdQ079QrwQQOV5zsrgOYVZFFdaUIacvia6EVTHTw9MJKlF8bdpB9ayFf0rPVcdw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/13057935/poster/vertical/en/480.jpg?Expires=1769114301&Signature=DscHB0H6XRZ7YkBseW9dWNMLn~IVFUjjPo4Vz7~~Bmq52-bimN8EgLygT7VaAoaeyERBewfwsrJ7LB9VSzRedQgjO7RDmJW4F0N2AkiI7u3vUjSLBFn9LsRWtmwmzmFhsLS9EKzHdNy5SdbKo3nTJpWnrNMy0BNNbJIketOFFjrAI5BXVrVuumG72wRWOeOfjtsmpiLDq7dNeUKlgaRG-7agSq4HmfjDCrDiv9mCUeCtZLOdts1Tu3szl9Vp4282OT9CKLIhkxZUOUbD9tdFM4GcOKpXrpcCredM-PgVzhlJLeznE5DNu43yJ0wYZOYpkoFA5Pig78C4xzCxny3-BQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/13057935/poster/vertical/en/600.jpg?Expires=1769114301&Signature=iH7qX4rgtf5NHU17RSICp~83EOKTSF077qE3IcsTHWI5FrBsRqSrMxjy0PGFgCJgQ54rLE9cbd0Tu1ECiucNMezNQRfHGDQpbMdSUj8cwBc4QRDQdr3vH~VjiG~uR7XPfDg4XhNjlzIZdktuBilsM-atsgcCo5RqXvcgOsPEzCUohMP9y35-GIEgym9y9D0QKgu9Dm1eh~KY7NIv~1qFaLbPD7kZZFelmHTCCHIWAEEYyxL-rDTvzBQ4xefBE1YFDLZJl7C0dwGtgiBAcoYQTcnliP1QeowlEjhiFXjV-A3iCrRqclenqgKfnweD72o7tGkwL9rR1KO-RnbgdXBseg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/13057935/poster/vertical/en/720.jpg?Expires=1769114301&Signature=OaPMaLEX6tVqHKb2RWqPAUMXPowHuXbsVxqiQ7Cqbg2ybuox6ZfoK7tkYMlIiOmJzkcKcrwbddD34TenP1BvRWu1JhIc4TY5Tbk0n2BYCyHJDQIiIA6jkNU9adMe792z9rwCagG5VFxWy682sFx9XsA6Wl8Vp6nEDa4Ooo-wXuEESmKFD7EIlI1KAYL1~7QF47mWgust0wpwj07KgPGzL~GoTpZiWVHMueiwX8xelyBok-4iFO1vvTL0Kzeq4XwsofZcWyBgR05CwIy1GlK0cjrSTTUqG8W6-Dawh4~kPJv4se2PpbopkNZ5rrAtpfXYa8H3Kf94Ce-~QuN4hCBqpQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/13057935/poster/horizontal/en/360.jpg?Expires=1769114306&Signature=XuiwSJkxTRIT77r~eeac0HJq4xMhF1dH5pdYEe1iUwYHaMPv0w6OP7m3-A4~f8QynPqQ~hPxDhkIfnbC5Gbd6UXOwtiRdXv8crvGDRlSfGO48IGcOYpLEq5doCVRsDOb7wLc2PLdeFvLSeNf01huwoRXhX47JWu1NBlksn6eC6barA7pcrJi9d6a-rn5oVWkeMZZvo9Fa~uoTZtYN3TYHrWQ1uYlE2FFbhcYtDOymftlq9ZsCN8sJs27T0uPZ6hc~Dto5RV8TDe~w5fgfJrCVv9GXt9-ybcREGeJUTKZI9~scnYRn1GUJVTmC-BlTTduqpSwaBbub5SYZJ1ZHxutoA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/13057935/poster/horizontal/en/480.jpg?Expires=1769114306&Signature=g2fDl7iM8osS-Jo-NIUU9TH~QHzBHnNVxvr-kFfU2be1PhWdPlSHAiJ6yWusv1Gai1dp78G3ffe~-3AOnsUoyl-BKLkQRu11UEWzK4qTVT84lvV9f5rc6qnGTy7lhT1gijLBjTdAhDVBBo4Pkhlzzr0mH2Q8MlcIo8fSxWpNLnns6aQDQsCh6Po0fFaMuXc7u1hUOswZTDjbeu556C1EnIB1~3iqQ4V1Tx35Oouumz6KxO6FNOA55G5lBWBb2xViyjGmv~Ns8HjEIG7rmxvY6YyHFkYhFBtIv~sVnxyrYkMn2WVE905Oq~k7ey~1VSXPBY59YdZXqf~x0W4gxBU2PQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/13057935/poster/horizontal/en/720.jpg?Expires=1769114306&Signature=QSpgfPlOFHufkugl22tHlHK3nWyiJi2SdZwDGj3Bi5kPpb4B4VJYRH2B5H3mqZc~D5cRZw-wmP-nRMIQ-6RSVOWtrLE0wtchp8Xar17u44dYGisps~IXiXNXAMzWEI6~JNJnLf2uKbJjHopToP0l-yNXFSe5y2UcEBUVlRrfmLPFlux0LHhYFSy5BdVn3uYcUzg5fdFI8xfPurGZ5tciVNagThfeycKlgZT0vJFriiSHHd5jrBm0ZCFfdwGYXJcLxbXI5x2riNhkZtLNkGxqbS6rU0g6ONEfbTvB4-di~Kmltu65EY65AqzYkbkYGSaHSxDpkex7L3rU7K6OY9Vvog__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/13057935/poster/horizontal/en/1080.jpg?Expires=1769114306&Signature=bVzjulFtJUViVRPRM5l4ryTzlS2GyorXM-ofwfH-5~GbgoPWBRUF3YFrGUJhU2beT8mxkit9smHRFFqOfdG53uouu2ZPAIQucoEI1G-O8QmDmChb31iQYeac6VUISxwLGnyOcDrkpEzw57b6IT9WcV3L00XGz8XQx9bZN-kGre08gc~mXqrbLrVHl0hGS-ga4~pT~iuiTX~kx3705lYuYbm~ihTTB7Xu9JKHjF~DBtaQVH1IUip0wonFPnSMWQD0nrFaq8TIImTakqFBxrdGj9IMhCsEoPAFqB08NWLxTX~8zN4saQ0d~vt6KLuQInsNPt39oHYIrwKjo8~8n8C4aA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/13057935/poster/horizontal/en/1440.jpg?Expires=1769114306&Signature=UGDYynE8GeI2xJQRXUQkOiZSZKn6numG7jKctt~vhshchWHLgiAUc82djRuhohxJ-PpPw17h4mae641KF1GPkggdgDl0F0hlSYyBKXfQpQEssX0oo7pKqpQbDpfAG3clNpGziOV2NmmMOl8A52VOpQw-n4Fw-16onSMWOABN8KfzWATTrl~s11Xe23iVCs7kffT10GoGendi63VSyI-Z7Gh2Sfm6sYqRECmpsOuuKxZoa-Pyv5y1XSNQYTMJgyjXaOnpUE4YShtVMRFsm-NBxwcnDoqfEyipnhU~iWRJGlaFINA80672qbKbuycvdneiNlt08gQj8ZI0bEolOqqLpg__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/13057935/backdrop/horizontal/360.jpg?Expires=1769114298&Signature=dWeY-EkCEm7ALV5Hguz3tTkha-aZkWRPQVB3IdmUb4b6qC9lgAa2Z0~OeQxt5VQc02T23-SOugAkYPOh-wGzzyOCUVlHvJyqm7YstdldRPkoFkbWtZ1hyjpGvrNy0jJVY79SinAYnvByAd9lsLdNEBQDEUS6FboQVxmnsBR6AKNUwr1y1ywR6kRO8Tonn9dT0BHiDku3QDiByT15QKOpDuZSlg5B7ykWyW20qqaB5mGoY4DDFNm1RGy1gCrjkqcQeA1mkLxfkM6eLt0aJnBiP4vQdnefz~vfWKt-zT63XxMRm0H3VVAuoSF5pBE-Rj0d5Ajks-iWeMBryO2JZ~OyHg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/13057935/backdrop/horizontal/480.jpg?Expires=1769114298&Signature=PF-EVl8wmEjTdimic0RU-yFJopjyydHDI0OTfJaKYBtLG59uie~Vk8owA6gJsC7cIRdrZrXvG2fPMj1PXj2zRfireM2HGkAYOtEnvlEkCJN9B4wa8FQzPjS89DOfc5Zg~XMUPBFI41OJEHrt7rhOLOtjI4JH1ZxCyEo-8IcAb1ysl8JhNyOtWG7ZKvUEGoYQYb5zpcJymnPiU2YjBrcoRCTBMJ9KiyBVwjbcW0cU7UsXNbnnYQkHxelgiidxr8XXdyOkHqvAukF8b3tEwTk2UnWOQVI5cAFIPGJg1X4UB~kEKo-ndcGAuZZaskrpJIOPcBnRp-5EKC59xo0E74Z9Lg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/13057935/backdrop/horizontal/720.jpg?Expires=1769114298&Signature=L6OU~1jGyZQh8Adpvv0LVN1oW8TS8HCgktnQ50O~mZZbOz9vrtiMpnnk90UvDCa9IKo0OYnw9Xp4kZQ6-P7Q8GR5eERdDjjWae0bHdPGYVjOD6RkkCY1L~aoglLiv~uBJb67GJjW7e8T8XGC2r0jRsbag3jyKo65QTq7wYyoWAEokHTcEql6L9uy3o8~z8geUxkZq5-xPuE22bXBRw7wIZ-E2JlCImBcXn8tWfhu1ZSOB0w3ND6DesdEimAc49KBWzvK1s67yLfyg8mB5UgYBspqs-QY1JrMrK4lxGKdtJBUKfw3CJWgUvb58Cu5YXMOd9HBmQPqXABJWECpH9mUVA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/13057935/backdrop/horizontal/1080.jpg?Expires=1769114298&Signature=bV81mgNWdKfuFmWYSR3W7bFzlJmdW8k0Yy6hsBtfndhnJvIGa0FmhMlFeAehVU2F2LU1bZOysMFlcXMLhJJ3ibB2LoIm8lna5mXk7Mtv3LHKN5ROafugMEpigjWeltS74Kyvneffs2Xl~5aF0hwSKA8Hfte1LZr6xFFciqQkN84Et61M-MUovWxJw~ySPphZ3rA5wfz-6dc5JTaKC-2f05eN964Ijcpu4yV6wBlbmHaEbzoriDr~nLnzUyfHNoFB4orvnokutHByoBlKS8FXiFTRR79vLg3KI-lzpjJdTXuJ6dr-ehRGc4fgWZyDFf1SFLLiF8fBGwTkF2XGL6nUjQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/13057935/backdrop/horizontal/1440.jpg?Expires=1769114298&Signature=YFGhPkdv6iMAMXLx1edOudxsNeDeRQTK2fVa0Kow7Gxsrcxb21NPmz~UbKI6wOm6QCoESw5XtxGmbce7Y2WJ-~lNzdGN7~OVEQhz~1iRyZNWQI8-3KXQOkC4IEIfI2FdNC3GZA1NC6a5~0v5sJVT-IUV6HWdxbJ5WMKrT3am6Y6JeoQ49UnR3iu8nUGoNGNwdIYDiPdmTWRETxbcXTwqU6TmqrppR4SAkktGKpu59NyStYxpDYo-~NUlGuD7UaidXBmNTcXEhJNr1-49AvBaSNxXgzYyN27JdGLVvUsST0ND1~DoqqcX5gKPQyiA7hY7mZj2SJes6hrs86-DK7kBeA__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "netflix",
            name: "Netflix",
            homePage: "https://www.netflix.com/",
            themeColorCode: "#E50914",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/netflix/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://www.netflix.com/title/81682935/",
          videoLink: "https://www.netflix.com/watch/81682935",
          quality: "hd",
          audios: [
            {
              language: "deu",
            },
            {
              language: "eng",
              region: "GBR",
            },
            {
              language: "fra",
            },
            {
              language: "ita",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "fra",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "zho",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1733575000,
        },
      ],
    },
  },
  {
    itemType: "show",
    showType: "series",
    id: "3059",
    imdbId: "tt11242246",
    tmdbId: "tv/95205",
    title: "The Equalizer",
    overview:
      "McCall presents to most as an average single mom who is quietly raising her teenage daughter. But to a trusted few, she is The Equalizer – an anonymous defender of the downtrodden, who's also dogged in her pursuit of personal redemption.",
    firstAirYear: 2021,
    lastAirYear: 2024,
    originalTitle: "The Equalizer",
    genres: [
      {
        id: "action",
        name: "Action",
      },
      {
        id: "crime",
        name: "Crime",
      },
      {
        id: "drama",
        name: "Drama",
      },
    ],
    creators: ["Andrew W. Marlowe", "Terri Edda Miller"],
    cast: [
      "Queen Latifah",
      "Tory Kittles",
      "Adam Goldberg",
      "Liza Lapira",
      "Laya DeLeon Hayes",
      "Lorraine Toussaint",
      "Chris Noth",
    ],
    rating: 60,
    seasonCount: 5,
    episodeCount: 66,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/3059/poster/vertical/en/240.jpg?Expires=1766863506&Signature=kAmnb9v-GcpFaCQuSD1rKMV-o5fvlJTbRFT9zKksbe0mYcNgKmteZ3Rw~fi8P1xDgaIWbkaiqEWd5qtIgZyXIXIWo50atS93h4Wj4jSj-UnTXBwYhMemAnOnFq~zBYIfMQFMnCPT2~PnQ23EXR8x9gYIBa4Y7cm0JYbdcn4UlK8~Vu~jXfq2NXDl-U0PIGQZiyYVzdtJCMxc0fNacn2JAKfQch~p3PNd4a6xXlrOhLMeylEvS3h6LEdEFRb3GqgK-gjaCJdzCTRKeW88vKzdUumHc3AO4JL2rKSJBpEsr3vPXU6WhCjj0PwUzHsZnM0~aOPNnqJ1DBsuUOj5CDljmA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/3059/poster/vertical/en/360.jpg?Expires=1766863506&Signature=BpjImzbVO7oqUKewCeKzPLbHeOcf~3qs0T~3jDk2nX0XbB4eZRn4MpogZxShfoCTx73v~Mn1x0DnnBXHby5U3tldK50M5xzxJMLhBy9cNytZPkR5rQWBfYVGzftbiCsMEX86KjI2xWc95Bhk3m5f-GquiNK2FSWD5HdPTI8w5srwGQgDLI0HH-PrmDrw8HvgCcMbMrStncltTl--ARwq-itRa-BXxqIj25egF2j1MViKh3vStq-93QHoRc6tmGpSgF7s6zMVwiM3EBmDOVcrDYDVDKSBLnDOLq8J8wr-ZLoOiCuhQ9oXRAi0KWar8LWy0s4HmYKwSTji-2uVOKmhrw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/3059/poster/vertical/en/480.jpg?Expires=1766863506&Signature=N6H9NQzrDwrxt5MBcu4~f5AA3FRFoe1dMJVLahOJKRFuLS3KOWfi1NV7BWP2DTSxtgRrB4ODtiRjU93wHv0VQMGds2lUhNK8Hyzcr4Jv~Znlh7OnvLPSGicZj3KgxDWX4l0ReGYwiuuLgrbqupL3lZzAilUoNan8KJ-bTx-6CqMoDtx77pf6x-JUs8E4MMEe7BTEufrxxFvYZ12ryCn6Oez~brc3HCOkLiY0KzthHOZrmWGMZyT9P8Q9WBfN-2vgW6nUQD2ZoPPA0Zf8ELrs9oVc5RRvjUdcGgWf8dzr8nUrErh3ZA8iSvH6AWCa3ELsuyzm5~tdCCmIqCiwoFmOsg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/3059/poster/vertical/en/600.jpg?Expires=1766863506&Signature=dUFQmkWzWFALhlrTn7iBm5T8XGHPfGQr9VakFJD9Z~Hyl8GeS3NPOwzdgEO3MhwU8uMl4lQmtcoIB2jGNbwTbyg93t2BWrKFKGRX47Omaia3ghO7BC6KmKIj1ozJE4GDPnwryJrCehCxJA6XRt65sfKzATW833ibMZlDrdSKQImkx3a7ybH0G90rfvBHTEG4uCHFs~6uy6l60qTOzKQJcb6XIDDeb35-C8E9DC72H8fxCd7Lhdg8fk9voF1nl2-tRrydDsp~G1S6ay855EN23mbfa437ja6MPK9k~igNiZh~IQtzv2sLY9L~fUMCmvB6UEjauf5ctQaj1tWjlwvPOQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/3059/poster/vertical/en/720.jpg?Expires=1766863506&Signature=Z2s6MHJMLHUvz5uq~i3ufeWaVcKgEIa~RH-c9UBu5KLH0xpfsWJ9TmDchd~UR7OzmHqKjBgDC9R2kKhh3SbrjC2k7uS7MTVOnmOTOgsPgYDHra7FISX5Vkserq87lD~3GeF6h~j~f~Q9DLJcNzhXe-6OolyVcpBOgXaIQ6ZkjsFsR4qgXU0WhpCzJClTYgsHOck7wswS6hPKdv2Yy45BsLTq14c3TIcqowpyJcYsl~S2S35x8voXIjDK4Q7oIidaDlBXdwqzEguwy66fcP0YX01SYeBokYE4lgU4BDVcN7w32NkzxNsjMYSIDcgB3uSIDb7DyItI0bHC-Xgdf1jiKg__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/3059/poster/horizontal/en/360.jpg?Expires=1766863511&Signature=Xxu3nRfJDLFX~xJ924wBp-1vGDS0I5dKYK-3Oy3z-ru7Uh7Grk3xzqbA6N1x5BCJiUrHY85xTxA83ktuII064V99dt7SX1v5xwIBgg17~isz0xvD5-EhEI6XzSqQv9oXyR8KfgRdA5PsH7sL73LIRU-cZMig0-kQbABh8XriBjmT-85QY13LiXddIT8adpfISKeCFeFZvM55UCidGqH94P81I2UcfQ0q-TvN2GUEhx~lcGAsxF1Fre6ZYMh3vgIZX-maB~QIyp29oDrNFv85jb2I8O09Z0pLRrLrcIFkFKz~zrjb~R0uXYP4B5vKKCNoHEoSvuT1SjwIKbzJeu4Xfw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/3059/poster/horizontal/en/480.jpg?Expires=1766863511&Signature=arntpFbtASwHfScKBYtVE8ok6jDjxnK5mQ-eWGKi0hjgr1A-Bw3hZMlaxwbtfjx0~iLt6iqxnqViqVjoXtgArR46sThesEvUvSLfCIMRRDrRcc1otwprYOnhr1WY-OJf5BayP1vwAfbZv6kCffe0sUwm7tP2VaoFyPfXUok73e9u89uJ7vSjolTx6-LZoaI2nyYzZ~kayZPmuQM2QLchfvQBcPZzq~39elVMueAOBalMIl~tGcsMWKedGoYDZ5ZRCb8tIBG7uvQcreIk9wj2~csV4KTMXYqKylvnBgo4Nf6qir2Bo95vGq~aeOexgsXaUnE-Hs3HxcksmEjjUvHjlQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/3059/poster/horizontal/en/720.jpg?Expires=1766863511&Signature=HwWU3rbtJb1aVC0S7CKAOixv0KmtX3HpYkZGj0~wcKO-hSiBW~UrbTKv35o-dt0P4zFBR5RtLF4bs8J60yT3eq6TqaJyBoJizQyyMSjdBOaCCv0thzMpM8LFl1OwwZ5no5rvLZiicCsIreMcxGldgkYl8ImrAXo~lzSVKDL~54LZgDwiTF1YUlr03-KPkFawi7RrgghZZqQLuXV5fDg6MdqZ-Fh~bb84kqNUUNZhjgBn0nlDL8cKzyyf1K1GiF8T0-8y--gDFQewOB3eCDudhYmlvSiYPu1RA6R-hZ2kfbsQYcqWMfPI9HBh0r6scpCenrkHIltl~t1V0F89WxDIsw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/3059/poster/horizontal/en/1080.jpg?Expires=1766863511&Signature=DnRy4gz3H7w5elIpr9abu1WXg8e9PowAF-k~-89S2v47ThjoO-WkMM~TxeLC4lcZKdpqh9ziryOoOORGMDXhbyWCIvz~gqjnDmea9SW259XJFr3fEYcuaysNtKnLX5tbBc0txGvCsT9Cbh8HuII1YV8la9P~lHNSIeevwQ~QvxBI4Xr8PUUwM6836dsYlKsh-HlPYVEPjsjNjidAayK4SfkD~lGaYA1SaRzfyO6YmrlbNEJ-Onbceo~2qZ4gdmd6N5~OqsP3kS2MSsI-8Vd61u2yytSdDmL0gSpaF15EeYPo0jLK1ccYcvjz-rtCa6VO6XufMIDfp3~zGTb1IOOoNg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/3059/poster/horizontal/en/1440.jpg?Expires=1766863511&Signature=fSeFNGEk2BchNs5ZsJtQp5AS2q5f5tBGzacOMhsUYcVtsM3HDjfxhj-iv7z0Uh9CZdUaZEpKnw~x3xbDDqgb~fw6e~rv-qQKAON5GOw5LY-aWdx6VDW0odKf8orywTaNmG1gGjAb~qMC5Xxop3paRbe6i98VBlqvxmm-ufNIqEBIXifom230UXmF-llc96q6kaNJb7Ufev7mOoj14hi00ZfleaVhT7lmsLsvPeQIvcLQ-5CG9tAtkPuvGjvCOvx33kOWlQ11jwju03A2Tb6FjgYuHcHw26tmJDk8PcvnGru~aLa4ByEWJKpNJFcx5k5bQAYSFFs7SmxAuk3QIaLgOg__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      verticalBackdrop: {
        w240: "https://cdn.movieofthenight.com/show/3059/backdrop/vertical/240.jpg?Expires=1763398704&Signature=f2lj1c5nLJh2i7jLBqMvXXGRBHNAMgQkLyWG-3ukEc9ILMXh9LI34Vpi9heEicEr1~Z68Q3Pfq4vuuprvSLjgfOUxXl9U6rvY~5CkaJLec97lMUYDEIa5VLh~X85upL7HUh5eKTKexxRHhp0RKHjsMRUeE6L2F7kIuLxlr4IQFnS81EgfGcXyZHQEZUJF2lqf7cSvwwB1ryvgdkpCAM~mLXIia6AFJPBNKM-wXBSewXTfy1RmvMwZsNCd2UilH-0YhWkuheAx16-4wN341biPkhVzo-8U1eqQQVAKufWHxL1NmK8P9~rQff-ei8w2Qua7B8roR6~pBs1IvVBz7Bu9Q__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/3059/backdrop/vertical/360.jpg?Expires=1763398704&Signature=Av0oD4XsJzPmbmgW-~RwVSjEblhMOQgExJHyHWtinCHXF~snmH-c01f8d7k5ybKktCaslc02YMkE~vOb-cBmLioF7DvKc5skW7NLaSGMUV10zI6Vt6vRqV39Fx8CArGh0UlNKsTsWmHNaIOfHB5nC5Ig1wNu8r7tYIQciCkJuK3aJ5dGzN8rGb-yOvL9QgbzGEDLgZt2g9TJaamV3pqnc~kRUKraCED2RydP0ryISHYM1~fTrjrTCmAHfY3UkC2bdPTGFWsIGkqVicvW-nPCeEoszL96RI-DUi5KU6iVvYdZ9uYXB9bsme7-B8XfA6au6hKkJqAbj0rZml1zkRDvmw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/3059/backdrop/vertical/480.jpg?Expires=1763398704&Signature=V2iIir9ktLSYZ5w4hbTHSB~k1ix26a8PLo7Q4E-O64QPlvCd4Xl-gum3u8mRMKU~qGSU-Gj2kLWfaCjayeNHW5zEsE4aaKGLP5u52BioFHR94OEHbtd~HOHN~eebSOfyKNwLjDCmgtA5TLYPBarY2WGl1F0bywicBO4GlG9LBDFdYBj6ZZ83Nv1lkEY01wiLWchSkWyGT5RCEJIAFF6dbdLR1VRzd1qq4vgc9hMkyHAibrWH3RH3jgkkvuO~CNrgEMMyotJJflCHWFFQ4xkJjPLEeOIy6Bd8z8vCclDOyItMRp130q6XzGz1SiwhNTUDbQOlf~lE9z~ZTTZcXRZceA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/3059/backdrop/vertical/600.jpg?Expires=1763398704&Signature=MbrUee7hkA2ulWhK6dCHA4ZqpX9zNcG-2Xc7f7jPkYmjB18Y9qShcjaWRO3lBvRPkLAgbEv092nQZGjJj4Tzuw7pVY8nzQYOTtoZCVkQKjNF3S6eVZJy7KSZZR1bCu3afE1PUGMlFAq~GoRE3FVGuzol03TEf4-ryXMnk3RleupJUxAPMOV2dl18~RGg~AVvG-JJAfZsFW8qUGWnti85TQtMKJA93o2IikCeW2-0NuPZzEZLGj6JFgVRBexGSk~d8eZZdsnCy7124YYv4qEkOXCECeaApZLB2MxfrJhco9H98SA1ehgx3NUQDOM-lT2gW8Xxh9evJdqMduxgq4q-cQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/3059/backdrop/vertical/720.jpg?Expires=1763398704&Signature=TTVeOH3k5Xh-TH6Du-2TJVS1pw7UjrmB1LDtRWPzyj1Oylmm4x54nB2YnLXMXmZWKhNzZjIowf7PugneRVR0C6z5i5l5~MZC1AAagziWehvLcTN6bScd9zh7mT0kkcU4SXaUxUKp5-cI0Jh8GLmWids3l6GzB8Tn9eriYXwkownn~J3srzjaQ~p2F92Yod7F6IISti3kz6dfVEUxDw4uyRrBpsSRIf9pDLhpMXYEdA7ihlli~hJLN0oDob-MrFjc389LYY0ByMqc1AkK9njYIP3Fxy8D0sWgDC4cAWr11OQutoYSD083PU8JU5GOe1A-WQX5jTF~6ldBrPOiQMivvw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/3059/backdrop/horizontal/360.jpg?Expires=1766863505&Signature=Y~Z08cQ4y4RcMcfsKRrFy4-7bva1ZM0PBRRx2Za6DqSBtJfYLgT8b1eDKVuIOaF0Yxrw5OxkWlpo3YJh5bOip9t1GqxT6ekGo0i63WC-bckUftRnHa2fQ6QvFcFjaTm6l-xdsiCIL-o7N88WtbejAUzLjm-v2S8CFNy9uDy0PzfOV1HzAs3oEU-5fAluojPmSVfXAKLC131zrH7x5zxHYY9tbW1j3mcM9PpPdQsfM8YA-MRqfMw5JPcI12JpgYIxYRpdopdR51hJHzoe8HTVOlt8eMRVqZFa0VG9BF-XHIXx3gJtYthhjT8Nyn2dUBbtCj8ADd5n3QmZVuh3oTcZ3A__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/3059/backdrop/horizontal/480.jpg?Expires=1766863505&Signature=W5hc~y76ZRSCFw4-IciCJEppZEH642xmXUa~m95PMPYBoMgA7L-N9GUkKlaC-aDnS1HB5K8bS-V-ycoA4Xl23hmBM5T9~svfaIxFnIo8vJE8RgNrKq02km6SprXVLYIZRuEnKE00t2pNXDPIM46DmRrWO22bnPPVO2BNuS-OumTcQvS7ht3H7I-etsEfIzzY64mXN0iLP1raFmkF0yNtkS30r5BcTnOMRKEEw-BtrX6PPYiQ4JyUg4sT~hYKAZh-wdh77HA4mTSteTD01aoSWbVIrWHIQyf26TpKM3OwClQsMnBYATGCRQ5HVTJ2edAphJPBjs5sU9qqH4Jn9lQRSQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/3059/backdrop/horizontal/720.jpg?Expires=1766863505&Signature=BYEfarLx2-J~vllgTztBVbi6C48709mGMclF~oRr5esVb8ImYeJTFQ-FBQNPUQHEgc6GMhvxjZK7nlhC~6Zev5OWCejVfP0YG8LSR01vaByeehXy4r8B~uXjwc6zTOgHjIk5-Xsx1H0iD7D-oSGQUpxctxGwOW~8MOUMuVYyhs1Xk6EBRHFUL5i3iaRLS6gfQpcIUhDoucF5h0St5ZRylJkC1vGyFGt81UBv11iwl4NDI5j-0S3cvDMEVGeT4g5ykJ6Kb2Hc3snyvbiCsxlriiS0J3wb2Dlhm-79Wfyw27loZqwetrVLu-nnzHSomVGjYWsGv3asUsi8Nh6olKZt3w__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/3059/backdrop/horizontal/1080.jpg?Expires=1766863505&Signature=I-0Hy-xhRH9DxCpW3bk~qVQ7TYlP~6wkV3CwTC-anLHAL~Yr8dIHtEi8FYoWKxjJcPLGGteRv87tSPp4JGrtJAfVyxVQUBbtJEUbCmnvV3t0D1~At1Ov~soFGag1-ex7wQ5f0o0-mxM0w~211xIDTBFfPwYGJFd2P-UDy0bRYl2KmELvsJGvzpn3qEibOmpWfxcizENXkGA~lC6~SCgK0kTPUPebMtnPLjQP5nEmweXDXeE9U4i15Xxj2BpvMkCXxd2WOOPUfQRtiIhIaxmx9xv~NNW1wLtOqeP~QF757TzQxjaiSlh215k-WDQQbg8fbrPEkjSgIzd4c90yk85hFA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/3059/backdrop/horizontal/1440.jpg?Expires=1766863505&Signature=LOk7IL~8eKSVXVqwipRzwwfS56oy-91bYK8KxFjakuQezQxULxXOXZVK3JXqYesUGG1HJpg7hSdL-jlSCRTRKrn-P2AI461i2Ff6CJEFVtO1sWBDlhTZrFMr8P4EFkBSIxriTQXIudQPPHnJ-jZsy4kWckGqHkNFyLWQ8QUb4Ft55dO0ZbIqjlwcpg8Yq~JGzQnFN-Ac3x0MDaZFeGtW~FcbQDGzmVXIxc4-pU4VfWZ2vAMKwP7qhZSD2XjT-MwFnNhDQkhlPVvvJNmnY5EjtIVsTqe~rkceSCq6hywfrBSSirISk3VwfPNLfjjKYyKPxyBCZtQAXbPEfLYlKvGFzQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "cbsaacf",
            name: "Paramount+",
            homePage:
              "https://www.amazon.com/gp/video/storefront?benefitId=cbsaacf",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/us/addons/cbsaacf/light-theme.png",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/us/addons/cbsaacf/dark-theme.png",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/us/addons/cbsaacf/white.svg",
            },
          },
          link: "https://www.amazon.com/gp/video/detail/B0CV34K2ZY",
          quality: "sd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1716282813,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B0CV34K2ZY",
          quality: "sd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1717403831,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B0CV34K2ZY",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1717403831,
        },
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "tvs.sbd.1000230",
            name: "Paramount+",
            homePage:
              "https://tv.apple.com/us/channel/paramount/tvs.sbd.1000230",
            themeColorCode: "#1764FF",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/us/addons/tvs.sbd.1000230/light-theme.png",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/us/addons/tvs.sbd.1000230/dark-theme.png",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/us/addons/tvs.sbd.1000230/white.png",
            },
          },
          link: "https://tv.apple.com/us/show/the-equalizer/umc.cmc.382y83engp7shasa41hon8bs0",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1653924815,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "cbsaacf",
            name: "Paramount+",
            homePage:
              "https://www.amazon.com/gp/video/storefront?benefitId=cbsaacf",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/us/addons/cbsaacf/light-theme.png",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/us/addons/cbsaacf/dark-theme.png",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/us/addons/cbsaacf/white.svg",
            },
          },
          link: "https://www.amazon.com/gp/video/detail/B0CV34K2ZY",
          quality: "sd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1707616707,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B0CV34K2ZY",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1717522847,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B0CV34K2ZY",
          quality: "sd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1717522847,
        },
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "tvs.sbd.12962",
            name: "Prime Video",
            homePage:
              "https://tv.apple.com/us/channel/prime-video/tvs.sbd.12962",
            themeColorCode: "#1a98FF",
            imageSet: {
              lightThemeImage: "",
              darkThemeImage: "",
              whiteImage: "",
            },
          },
          link: "https://tv.apple.com/us/show/the-equalizer/umc.cmc.382y83engp7shasa41hon8bs0",
          quality: "hd",
          audios: [],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
                region: "USA",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1696575943,
        },
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "tvs.sbd.10120",
            name: "Paramount+",
            homePage: "https://tv.apple.com/us/channel/paramount/tvs.sbd.10120",
            themeColorCode: "#1764FF",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/us/addons/tvs.sbd.10120/light-theme.png",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/us/addons/tvs.sbd.10120/dark-theme.png",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/us/addons/tvs.sbd.10120/white.png",
            },
          },
          link: "https://tv.apple.com/us/show/the-equalizer/umc.cmc.382y83engp7shasa41hon8bs0",
          quality: "hd",
          audios: [
            {
              language: "eng",
              region: "USA",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
                region: "USA",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1696575943,
        },
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "tvs.sbd.1000452",
            name: "CBS",
            homePage: "https://tv.apple.com/us/channel/cbs/tvs.sbd.1000452",
            themeColorCode: "#040C35",
            imageSet: {
              lightThemeImage: "",
              darkThemeImage: "",
              whiteImage: "",
            },
          },
          link: "https://tv.apple.com/us/show/the-equalizer/umc.cmc.382y83engp7shasa41hon8bs0",
          quality: "hd",
          audios: [
            {
              language: "eng",
              region: "USA",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
                region: "USA",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1696575943,
        },
        {
          service: {
            id: "netflix",
            name: "Netflix",
            homePage: "https://www.netflix.com/",
            themeColorCode: "#E50914",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/netflix/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://www.netflix.com/title/81405081/",
          videoLink: "https://www.netflix.com/watch/81405081",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1734336132,
        },
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "tvs.sbd.10000",
            name: "Hulu",
            homePage: "https://tv.apple.com/us/channel/hulu/tvs.sbd.10000",
            themeColorCode: "#29A869",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/us/addons/tvs.sbd.10000/light-theme.png",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/us/addons/tvs.sbd.10000/dark-theme.png",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/us/addons/tvs.sbd.10000/white.png",
            },
          },
          link: "https://tv.apple.com/us/episode/womens-world-cup/umc.cmc.51okstrvydgog2l8e2cxaq36w?showId=umc.cmc.1uqqq3g3t8cbib7hcyniwbu83",
          audios: [],
          subtitles: [],
          expiresSoon: false,
          availableSince: 1713636676,
        },
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "tvs.sbd.30061",
            name: "ESPN",
            homePage: "https://tv.apple.com/us/channel/espn/tvs.sbd.30061",
            themeColorCode: "#EF4135",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/us/addons/tvs.sbd.30061/light-theme.png",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/us/addons/tvs.sbd.30061/dark-theme.png",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/us/addons/tvs.sbd.30061/white.png",
            },
          },
          link: "https://tv.apple.com/us/episode/womens-world-cup/umc.cmc.51okstrvydgog2l8e2cxaq36w?showId=umc.cmc.1uqqq3g3t8cbib7hcyniwbu83",
          audios: [],
          subtitles: [],
          expiresSoon: false,
          availableSince: 1713636676,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "cbsaacf",
            name: "Paramount+",
            homePage:
              "https://www.amazon.com/gp/video/storefront?benefitId=cbsaacf",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/us/addons/cbsaacf/light-theme.png",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/us/addons/cbsaacf/dark-theme.png",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/us/addons/cbsaacf/white.svg",
            },
          },
          link: "https://www.amazon.com/gp/video/detail/B0CBHX4J4F",
          quality: "sd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1716858615,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B0CBHX4J4F",
          quality: "sd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1716858615,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B0CBHX4J4F",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1716858615,
        },
      ],
    },
  },
  {
    itemType: "show",
    showType: "series",
    id: "5763354",
    imdbId: "tt30249004",
    tmdbId: "tv/241373",
    title: "The Manny",
    overview:
      "A busy executive hires a cowboy to care for her kids in a moment of panic. Little does she know he'll challenge her views of gender roles — and of love.",
    firstAirYear: 2023,
    lastAirYear: 2024,
    originalTitle: "El niñero",
    genres: [
      {
        id: "comedy",
        name: "Comedy",
      },
      {
        id: "family",
        name: "Family",
      },
    ],
    creators: [],
    cast: [
      "Sandra Echeverría",
      "Iván Amozurrutia",
      "Diana Bovio",
      "Alexander Tavizón",
      "Anthony Giuletti",
      "Cassandra Iturralde",
      "Sofia Diaz",
    ],
    rating: 50,
    seasonCount: 2,
    episodeCount: 18,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/5763354/poster/vertical/en/240.jpg?Expires=1766861022&Signature=V0p9yOkhiEOriCkfrDxP-JE2q8YPEK6Ev1QsT4qcRvwaZhyc393aRM~gdnWyA7KOhEQ7cmQOkBFVSjEuHkcZLa-kQ2gbCPwaZdg6w4hdA~1ZUeuss9x~LX0T0rC7EHA8Wzi3pIZClrsS0y4CMZQrxdxhck0i7z0RiikLjC1F4AVHTNxUrA82nX~gJSrX7EWAUBC0lSVI8zxwr~5h-xvgrXbC2YARQ198VQ1HD01~lofXBjZ1YsE2pNS0AUWYKGr8yV58ZIv6nhmhUJ4nkXh4XjsF0ApotBPYGNhm3uhvC0IzAy497w9zlHZ-2koPtIQUP9YI1ADP4bBaw6Ivkc-Jxg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/5763354/poster/vertical/en/360.jpg?Expires=1766861022&Signature=GNKvpBFrvsYO~uZXu8Gbd6lCZEFasj6vjS-MtItm3wpn~donvMkap-q9Vw0lwH1PkjWY9n6cHYtqAQEDy0V8tXIdh7PorDpqiM-B064NHli0PxydoXusIDxeiX-c6AkvCsfVtdRbG2X4TOTUoV1MnFDgy3q3ORk2C8znNeat3jggY3oTcVO7yFunjZGUMoJqlYSLXDpyyHakShUgYiwwPnrrfq9X5uzBfUiQhfjrrhDjsiWbGmG-RRVew8GlVZq2Sr~gT32eaeodngt1vpm7xt-nNZ3Z7HjqStG3R1MInDxcii-iFuw7xo~wUPExTGCUPgbrsrNGWIVQ8A0RdTunqA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/5763354/poster/vertical/en/480.jpg?Expires=1766861022&Signature=hQEq6tbaTnvCWnxvkPLlW5hq31CKMnNrbfMBmu-4EYXm5k0mBzwcbOQ9QNIQKNxF0tsHzREGeFA6vt5oavtMLtVOOc0zkEFtAMoD37fy4Wit7odl7bHEw1a60Tv0AKoxD7q2pjMoDQafR9UFOaMhIZrSPep-fJl6SlUDAEXgPQMysdx8vhDJ150tzf~gmajpejtmYM4pnGtM9O-vClzt2sss2u6Zlzt20H-BucCXVntHo0Va8MzCO4BGkBAfzobHNBbuZe1rCgnl-OdfZy7wdwlWtQhEuV-MYXecF-xxIhiEFEM5MPd9cXfVPjF9uwjLtYDR83d3JbyzSM3BlvKl9Q__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/5763354/poster/vertical/en/600.jpg?Expires=1766861022&Signature=UlxpoOAiVx7J0QkW30qN230i2vj0QuQSwVAqNkH~J4Xbi6EuAoGDkLXhKyIyfixUaTM5lUNpKPvlBOAEqeKi-LlKD-GmDFn2-pg32cc4qVry1~aGb-8QLxop7GRBetPwjh2FztBY2uUVKAqhQRz3YpxK0j-WjBGt6oQpkxvl8sTHUC60XXLrs2mxPuQOve9Bg-WAB~Mqr4u7OpZhAoDnyJr75ZhH8IQ92DVCqmeHNami6j0ejm4Bv1yOWCPxyOOJvInIvJjQwL5LnG~b7t5lM6YJC-zovKFHv-0ByO5SkdjK2xj1nlBi89DviO4CZ424K3RS5HgYRG~euOLkcZIx4g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/5763354/poster/vertical/en/720.jpg?Expires=1766861022&Signature=K5hmwsnCmxhIZv3KT8ho7KFYCbiIcgrrqoAhatFfcYhkxwFh9JeqyscL0bNdg0DwW1j1n14qIFZQSC9TaCuLpF-uwtQ9gCalzFhyO1T~lW8dRCY8ns9VvtrrSuWwtDUcOpFCc13MGnhaHD1o-9gCfe0MfAa9zbPRYTDIYeGfstaWeYXwrryuwvVkZY8NMmtvCiTFEkOZ99ah9Zgeu3Teqlbr9c1pmubCyAGj8ZVruLySkeZGtooq2H~1BipJTbYvbH4ly-GqNDhbFYlRt7~K0gNER-ZmdlDqUInzVA1WIMrOrpj5AG1HCm8YecWDuxg6c-qqjZJJVruBR6hC5S8n7g__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/5763354/poster/horizontal/en/360.jpg?Expires=1766861028&Signature=jGAFxO4AFBHbRWvEljKEc5tXP6Q84wll8Q14hoStgT0ZhmBtOs0jbxlkjkZnNvyYq-mp02iirQvsUm6PLKnrUFmYYs6NsEBTR9EFhM2v6h6SKlURmFee0A3cerWhWNiLUV3hr-1RCiK54q1zenfjpbE6Y2kVGWhPiW77TMQIeXTh6dVsvmPdX8DOAMlSYjFN6yvgq0zts7HzAE6zpKyQVr3wAG73CjnvbNLTWZYL8CaOGPumugzTdOIBYNPcERwxKFwLAZSIWvNKxWbrGE04pCXItHDVB-YYsUwP2vQ~E9zQqUES0fYokOsz~mvue74AlVMmWhAMiIm8Z5nY1KIh-Q__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/5763354/poster/horizontal/en/480.jpg?Expires=1766861028&Signature=RK9BBwQK31MROl~RekMjDsboZXdKjO2Fw4H7vQchgHuw33yfVVIjqgWssXA1UM1Bx-tWtAqQpaABgSBYATZvOgMHLetPOyVzXjz9FY-Krl8UzljSmJhvN9TdwnhWxeBnj07oGULuzCD0l1BZuut4VfUokahVvBhHeSKQoQJDSqfuI1hut~gfZnRu5c0-ld3fqqWUCpK1~n13Xc1NyVlhAYOLXSC10cwDqLhIh9pf77-uynANXG-JjDdgCoP922nNzg1mGUnx0qNbfP9VLRHIdAkNOD38ZpISjjlRYX35izYxjaHOYeURXTT9B2NZiRj9ooBlbK1kUiCvk5ZYuh2d-g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/5763354/poster/horizontal/en/720.jpg?Expires=1766861028&Signature=ARCtvsjeKT108CKMlFX3uPrrEZZPmPafVsA-6bdfkjjRohSXRcVm1VCPS8ZIz1CCyPxBgCXwL20qm0q9w191MI0B9L0BDBL6UoZIQw-ok1DRtqMbcNhkFrbl8qdmfGR7Gp5fyH4e18AfwQK4ur03aUOJ5m5sAiuXCseYG72-edKh3xc8aaJ7geOQUsK85-VSbC0TXhnz2m55XeKiCC9NFn2gAjqCH3yPNOho3KWZt9Q3-hk6Gc-JFC~HV8ZXuXpWRza8iBfIicvmBgegKEgfB1cumadA1sIq13rhXv1LpO3r84GwHq910rh8oFQLgXGwQXhh~TnjRk66uQA7j1fwxg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/5763354/poster/horizontal/en/1080.jpg?Expires=1766861028&Signature=LazWUqFy95iZsvLgiSw8ehEICE1F9F99o0XjbikcF-urY363bXKTKV7BrYV~jQANKBhy-XJBqUGwaT8pCs7nwEZLQiZUtokp5pCHr0a7lfvkayuo--9o-8YSwlCbR806J-1aEdXggnBDGSl~v7e3XviLG-pmcgFetPFMMYCMwrrQzrTcFxX0odpeGv4Nj35j3udA~EYsml3~JssUw43lIP216EXcouhRH0R3x9ChHrbbY4L~qxtub~QBOTHqOFN3LoK336GmneHL8VsW-fSEGXJl~42Y4MHYZ~Ee~I9-H4g3Tg-gLfcyPWsooLhClEjaemQim1wMr3m15HX8QU0hyQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/5763354/poster/horizontal/en/1440.jpg?Expires=1766861028&Signature=ZULHjm~0I8I63FT5gXMlD8puPbZL7HnMAz-F8X9jXWRXw6I2cNiE3fURgcjm9BRlTaF63uAD~CR24OBVilAY8U~rBoCqyrjTds8FzPxAO1Ym9Ffmtl4CU~oV-nr5jhNXiSr8OJEN1xoRQ2x5ulCmg~vIcoZkabWDS5N18HW9WB8746225i69-7vHFXhjRQv~nQox1GGpNu8olPMGefVSpO7L1N4j1UpvRjtDAz33cSSG5fa6wqzNYBT9G94GFT4UDo07vEuvQf7jYS-VEloqWNcMSD59~PIq4iEZ5s2ns5tLqwNXhjit60NkZs7a0IfLe47rDqc4zGcgFEmHa1KPoQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/5763354/backdrop/horizontal/360.jpg?Expires=1766861018&Signature=aB8890oE9FdVh8rrrG57lkQtE6N7o7-fX6BSyDA4zvUL8gbctCkH4H3Elhih-0TUTK1d3Dfjn4j7MnvXhPTX8~fsh7f6THMA9i7MH0axMuVh1eP8vW9ysoBMvxfarrQKEONHV2BayN0uwkwk2hj-GBXzgvFf~T913C8yOXOcsINVjddeOzVZ66QkusDrygFaEiEyccKZJgHdNBRXVeCmSciOx9xoc4~4-cdhQarhraVmZeWFabK-KUlYnYk-4dnd~rdHCsbZuWJODC7Sefy6Izts5DhW9yRiDErjkEU1XASQ21Fgl1U1EgHymXy97SzLOVybh5sPwkhXju9aNBVhLA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/5763354/backdrop/horizontal/480.jpg?Expires=1766861018&Signature=SFYP2gDzPacMxKcFYDikZwSqmmszElDUiG-HKRt1Lnq4nA3zIURofBZNOsGSdGeR6RTblz5x-PxPgj7WaV6pxWP0RzZshBFDykw0AkZZu10F26DBE8csnHSkvjxibPsJ5JtGeYr8zH3va2ewtzzi4G6z-PSlMVh1IdjfRNT22uenAmIYDhTZ6AYzYgvsXZDTA1k8rbg3WeAPAxKFQBNLIEZb~JxuCnDOnZLGkqGlSbRcJxX7-0urj8VvtvzeeY28G7KQZMRsaYN8d92bn0r545ykqoIvGyQyzjUn0rhJRSKqc9mrDH8Ww0DW7EyxOZUa0FKWZFSaJEN0W4ojX8ybjA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/5763354/backdrop/horizontal/720.jpg?Expires=1766861018&Signature=iSyFTijwA~5tsnpTt20Uk7e79hun4w-pnDW1LDHDOFJUJ4BMWzlWkZIAYYvLsOpoUjtbueMPEOQ4460E~ujyVmJDb-hJMCYTBUajW8LT5hc5geik4PhKVlVTuH6msw8qLwssIGsC1Xfj3JqJ3stZfGiTOXeCg-cLDHLIiVUm4vRkmjfo0LJByFAScGWa1LJycuL8vYoxNiFB255DvEchJWSI74fGWlWA0yKIxjTRzfGg1v7CAon-rWpD8a-E0kbbfxd831nVqjN-osfRAA0bMS7j3pk7oD1uEBeVnSfrAwDwyyAC1HXU7WqdgNRz4k3a1JKnDgRGHOvnf0QQVpIRmw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/5763354/backdrop/horizontal/1080.jpg?Expires=1766861018&Signature=N47Xv0GRdDWAT7lKvc5rwBfLeT1F3FA--vTaCind8iMzM6J65acRmkOsUIVotMDcCCTbdZRbYeMwUgWwWdGZIj8EkRtWq-8jkEiO99INp05rroemvamt-BEZR6-WZqzU0ZkQn71L3IgckZCbGVOkzMs7nuNQftes~qFFSc~XVxuqkpoCxXd1bRgV8nVE8vRatH6KLroXXdChoowRCrI78KGOelWEOdOUfvv4rpDsq1NKuyrrJEJk3TZikyEmVSMLeDxWxRBMC-0ONtrOawDMIPgBmRT93y5rxallbvBxmOF5nWEk01QZNLxvt2IRg4wLR9nxmz0YesKMIF2ye0SQ5g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/5763354/backdrop/horizontal/1440.jpg?Expires=1766861018&Signature=KfgBtOMaiTmKO3rc29C8eTH12cvMkohmNwLEv2SpBGzWPZU~f4q9oUTDWdJgRfK2H21LLbwPD1DUTYNBAUyPZuIJGnVsX3V1hwQbHH00OvjfFecrZYqSKLt6lLysqH9uc9kTkmSRAK8RbQZquij~Sku~tNDaTX08coeFwFSyqA3dcazj4phfEPsTPtOraRQZlYX0neWlpddt7uzxesXyKpcVSS2lqCRPcVU-TFiRrGHzVMjDqiFIwqBaOSW23EMhPUTF5tRLlpQMJhEnXvLaCXL2-9z9yvd6tuOiK45jJwvbGoHiDItQimbHzcafN7pqai3oYJxH0I37-qg2GFZoug__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "netflix",
            name: "Netflix",
            homePage: "https://www.netflix.com/",
            themeColorCode: "#E50914",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/netflix/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://www.netflix.com/title/81611640/",
          videoLink: "https://www.netflix.com/watch/81611640",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "fra",
            },
            {
              language: "pol",
            },
            {
              language: "por",
              region: "BRA",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fra",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "zho",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1704612969,
        },
      ],
    },
  },
  {
    itemType: "show",
    showType: "series",
    id: "10271416",
    imdbId: "tt26676489",
    tmdbId: "tv/220056",
    title: "The Madness",
    overview:
      "After a media pundit stumbles upon a dead body deep in the Poconos woods, he finds himself framed for the murder of a notorious white supremacist.",
    firstAirYear: 2024,
    lastAirYear: 2024,
    originalTitle: "The Madness",
    genres: [
      {
        id: "crime",
        name: "Crime",
      },
      {
        id: "drama",
        name: "Drama",
      },
      {
        id: "thriller",
        name: "Thriller",
      },
    ],
    creators: ["Stephen Belber"],
    cast: [
      "Colman Domingo",
      "Marsha Stephanie Blake",
      "Deon Cole",
      "Thaddeus J. Mixson",
      "John Ortiz",
      "Tamsin Topolski",
      "Gabrielle Graham",
    ],
    rating: 64,
    seasonCount: 1,
    episodeCount: 8,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/10271416/poster/vertical/en/240.jpg?Expires=1766860976&Signature=IGKagpEuKEUQAFkv1kjZr-cWlD2ov9gwQ-Wa-zDuwWTp3toeyaEZJ0B6Aozf8yrB9p5-HRIhBDec2SO8a3ePXBI6fdHz~2RacZhH1WtjFJMmCmmu25FqaLwMjujqDKum6CW~AjW3S2JLuaakfzQ6e39DSly2uFFA3KcWru6wROBDEi6ffa4UWGuMY7Qr08iV4ymG5HAAMzWKGp04lz8y-2M-CQvYgt559WVG1yyNTtlnMdPsOei48oGs9sTURLe5UCfbxAKd~0XGlJyWZgIXNHvI1~m8sr9TAfchfx-FTtor0xDo78gwAhb~tK5GdYYnSppyFffsF5DZ3iZ8JgNhow__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/10271416/poster/vertical/en/360.jpg?Expires=1766860976&Signature=dlMMdPKsdYIiHCfO8nIQtJw6PBmeOjQwxKVdqTCrZ2XbEYVCzeZOvNPxYKubvv491G15oXntZqnqYs6-1z9lh0cN8j0P1PCWQMX9BpQwwNQQTnvCtw1RvRiMvm16ngSXqc9KXNqflCmyyQ06goQ3kOQ3wXcQck4wBJR0Hj7pKssB4AiE0WQm8z5zT47zHUxNTcrPzhCOPyi81juDYNf1o2aP7wNM5VLtbE5fVsTRQy8DHEb5faRMyUdiGqDdzRIxdAgS6RgbhJ84sTGpmYeJW1gAO9d3tmSB80B3xhfz1Gs9KWEqKOxwHvI2cGSx86dXgugGH1jIfS4fQCgFnlVAdw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/10271416/poster/vertical/en/480.jpg?Expires=1766860976&Signature=bgPyLAR0VPthWR3HenKyKTPMsGmAMu5s2GEyfsMvq~06DoEyBDx7NcChXfF9Adjw71B8iSUm95UuSWD2~s4bhYPCkT8Zy4vooUbPmtAKKG7s4KgcgqmSfeL5hnB25vI7QHY8Pk8mSOQgeazzgc433l8jasrnxq8IM7D-2xYt-eWZKH4cbHZOaGl7IZLmN6hzLKwHSyKx7KHl-EGRLhSQtUUSXHH-Z82T-JAXaiMHQiOOptetYVb-Jbfnz8nghD7urtVWq9BkIanU5H7VvSrJ~4DinW5dbdKWdb31WHPG-GPWgYAHLha5bTAgI1sYPFEajTbhaYZBuEroxgLjT4Qbfg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/10271416/poster/vertical/en/600.jpg?Expires=1766860976&Signature=YwUFXKFBkb3LxqEy0heBx7C54LyWgRW33DGXiSP4rNp1YpXjKnnhOTUBCnphRV9g4DYPHozRq3GXmD-AZh5f3cg9Kx4BbhjPrrpBIZ~WOqM2VizUumSdk5u-FxlDVapUv-7vozmLjfetkuUBBk9JBsk-Z5VkXr6Gg~MWTXjT5SnXa2fgI6qXYNvWnilddbynTQ14BK52yBFhc7FYrCE0U3kkTQPtqbqDOzensEs6Bvrgm-GdRHJEGvu8eY6Oive~-6FJc1VSIDNYLDKfewq1GYRqcD7Hq4Y0RKif1yq4fJPiPRbrXWiIX85g4ahjm2s9qcIXWDyrcHdY2Y9zGvHotw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/10271416/poster/vertical/en/720.jpg?Expires=1766860976&Signature=QBdc5SKyrwuIbk31dzWRlqa3JkWab8rL97g6duPyYsdR93pYDZ7qvwQzJi27N2MS6uQZglDFbgIKQGqVDFdWVZhqCCANGHQA4yTmvyE-hnVeu2SpJIuwrQQ9AR8Hiyrphdu8yjf~7tvzloerrHwJC8JP6umBgumalfcyhcK0aJS0KpobkNR640ZYZune1KeMffz4~6Kyy1GAi7UTEAUiEEUy9qzgRSt55jC~a-jyIktwJm1EwLxB5EQcdWuhGzhtRPo32OugxOyGi8OhTEbo3LXIF0gXccObNGQNOCYEXVCfRKZnHVu~k9JmDg48XsHsfdWSuHs~xDUwckoFtoFR2w__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/10271416/poster/horizontal/en/360.jpg?Expires=1766860981&Signature=V-y6d-qrKMONMgS4~x9-zJOpxb~O2Z6b370wKHpyxAUr2qB~WkJj5H2Fh35oVUtMRwEWAZvt3jfkMzh9N-2sefX5B5NDms6GdUoYHcXBXrhF6L2MccqukUP4bMsY-doI6tprEqc7ywN2qV35lAo9o9VbEiSyAdxuna7ZqcMf5pAXmNHEg16gkBK6Q5Rcoo8qIg8IcQwhjapoplcA7Ds-LAs7BnTNeaZlW4sBZoqmMyknpF4MmkGeig8HRL5d-ikTAWESC-KAYzANlYDYZimec9Tyy9CjWN4g40DCgBJXe20QZy0iljkAh1llcwv1MSFhQN8pZWO~cDNe1ookdOs0Og__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/10271416/poster/horizontal/en/480.jpg?Expires=1766860981&Signature=lGvnKNH0YbEBxtA4gpmVXmX2MvD7VblUqY38eb29IuK4uAmpP~mUxE0eJnAqABa0lV8iy5d-bfEM46hliEDpWHZSQQANbUyRuc~C1ePnBxZwHq3W6o9G8UamqKq1-STjllwwjYTAaydTKgjuC5Lk1rMGwA2-UQ3-JSpTlmgheyLY-SshMZPcUZ-8HRv2EkJPiJbDlM8WWKfqWxNinePcVlOfqKT8JGDaSOU7VxAowkSVX2oAxEbUhYbfOd8YMpNYCfACRw4hnKZDHoOg2iwepWdwzAbK-4WPmEXP0iGI3GEd4Kv5kzo6bLQfHkcCX16PAVH3Njb2nEu6m8nOBWM2ow__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/10271416/poster/horizontal/en/720.jpg?Expires=1766860981&Signature=Uih-k3BVZB~W2TYJB5YbN4ZdytXa9u2q6TFfX64iO1vfajzFA2dowN12TBO1-JaVPY9VWDmOwbnXZ39D2d3JMTMPGd-Th2yy6OPoOK7wWSt6YNtrBB~zo3X2LS8y8WWEr9Qzj2nkkHpl6VZHHfNTRXAEJU1-6keqyMGvnCzZxXO2Je8LRNPFfYZ0F3txW7aL1cerr90m9NkpZlsjEvKNbpHAlbjqqSLqnh6HZL1c4Odq-Cg4eQV6xj6jXLOM5vzpsZIE70zASo45V6zqyVAASzXKOkXEpTvuUOH6FZE-FGYCXSvoHzpjNRGotdjPoFsHWjiqpCI8~0BkvK4keBvqkA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/10271416/poster/horizontal/en/1080.jpg?Expires=1766860981&Signature=hoiVKJVA2J~buTli9u5wxZ59G5UreIq0Cg~mYSrkVZGNYaeYvhMZIVRPNMLmmpxvcTtavEYsZyBB2m0HwMjagpXjqYBmeIeArR3oEU3GcPZ~al8ha68Ij0eFvM9C0pE0vzI5urgtK5lGRASUwJnTxVMOMSIEwN17curIfDCsFfQuAU2weNc0fqY~g8tAkYDukFYScac369JOzWU~~OuJVHKFZnlBMyglufihOpHJHsp0SYX2pQB07qihDSqwdVBhTNEbMAE1SsWIa8-SXdJQdZiLZ9KhrWJHpd9K0AVMcjpgm48EXcm3WOY2h79PiQemE4Mj9k5KSkQCvlpF7Y3yfw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/10271416/poster/horizontal/en/1440.jpg?Expires=1766860981&Signature=EPQZruZKKpjgQQgL-IrjWoewyboFIfR0YmOpDrdlZJYMRKGhX0idYTxgQhDbojR3hcgvaxLY8BY-6C1LoCJJpjnL43o4YI9naMZYiEg~nk~irMPXEvO~nswSQEezJRk27iR4tE~d~2oSJxjcx3WDSxkTLaJ9kQgPgbw2RBR6SrhxIsY1SCa5uoL9z7-ch48zU3B4e5NmBp0GPnrNQav2Hrm0GB2WSfDfY3yKX89Y06Mk6A9GRKwUu3LDGDFwlzyfATfaCR3fcD~3jH4guGKLoQTKPgqMo5vMR~wdn9zE9-cKOVdK72nQw2JwMiKz087ikda~gUzksg8YFDusjQUC-w__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/10271416/backdrop/horizontal/360.jpg?Expires=1766860969&Signature=fJ3q0KXTd9OfBo6n3d1D7-9KwpnPRCrEdafpFYyUAZM3mrbiNPwOusrgtqHksuXGrnU23vrg0ibnQEZ~Q2gmXzpL6kn6PQYb~5TvaZ5J0unovomYr4HUYn-30wwkZFxWMvFoo8PSMFKSJQrx6CIzmlrr0D8EykLoY211RdEDjPKdEq9DygyyjK0w0FbnwN~zcyEC1H6JoXm82Qm2bk9jYdVSwmVIyPKQJOUgeJNUHl5Aae2vyAxNBct0el-RdXp8wtaVa8Uw3Ue-yIgt8b8JcvyqzK2YZu2AU-6zLO0gFK1vankW2Ni9~hi4PChxHWyC4cHUeka6x2Swh9XNhBvxtQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/10271416/backdrop/horizontal/480.jpg?Expires=1766860969&Signature=SvXDkxdAG3EdQ-rq49b8LPs5IJlpIkXFPEQoQR1GYKkVs4O42KZRmEaOpVEtUmJYOOLlE4cZOHhNn8OEE-k8tDJPl6WJ3ovrXSZeir2LNRFAoe-HXE12ArZjINFaBlLUMgnboNDGR8aVT2EnPwwC7GUQIxrivCGxwnrHF9ZdPAHFFfLDqeyL2aRtfcB-gGEuaTyBLeiC5RMOReeAjxUMLQoT1bTMkEvi1KKSxg2p5oxFLZPVVfxyg~mUI2S~pLda~kr~SHk4hoauhzPVI0GDiu~218iiuhseulBRssNjKsqt3fJ0LGYTUSJ9~bgsd7dErNOc9KzeDGT5QNY3ZlGVHQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/10271416/backdrop/horizontal/720.jpg?Expires=1766860969&Signature=Atfgme1Bm4hOnz1fVXGGdJ3fHwSg~l-aHN4C~97hw~Ohet0bPFbliNeFoz3qQvDkTTB2gzPydtZmEn89H~kuD5kMmMS1Z60auHvWGBvj3S9AVVMVaNhTHr7lGfrE6xYSJ~24dE6B0Hzu7jnQ36XqEhUix1nMl97JCGCxzPalKnMeza3Etzc-RzjLXre2kQqi8bldfYzq8LsN4iB4VFfP~H4govmTbOdPJL8XTtwX1kEzFPoB2fS2wciUcvSXy0Yvkr2SZD7~mY~RIoTJTUU-ZOp-V3f5knq37bZS28quL-FKPIsR-L5-TEBn8VWpnaXhwOSrEf6mJqhB9e1lVzkxag__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/10271416/backdrop/horizontal/1080.jpg?Expires=1766860969&Signature=bK4i9EcK4WKFfTJ17RcVqeGPG~q7TuFeiiTl9k2DgdKd5YbMU03rbK2ksiP6NZnsdUFAySTf5oQ5GVt1p488P3vDCowIFr7TbU9tu8Ci~-1U0mW~Vv68-Fbejzq7-GZlin1msjcx6wm3~SWa5d6YNz53IIsyDkERsGNRZmvESUZTSQqGeNX~ADL2~7D-aqMyShj8tQUMqj-lESCosQ~4AYvZ27Zt33v363zUVVsH3DeqpMsYeBgyTDA9S73xfYGyAM1kP0H~BWAATxOgVSUAHHjBrVq0iKFXoAaq3vAdAfyOiszSCk0osgRd74KN9CaNmeh5fYv2l6nIRhvoL~gm7Q__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/10271416/backdrop/horizontal/1440.jpg?Expires=1766860969&Signature=MJCOy~K6tsJNM3u7hgWIJMopfEMNIbfjUWA3dTaLJ95Jy8fPDz-0aBqvhL~zbMFcAH67SgjgRZrxLldbNDSz~lbaNRMmz7YTW7V-9WkWIFDh0dphXIaasq6dded-Cb5KxrvDcYBCuv3H2lSfvzDKVD-sn~RTsPoXPTzYzZV9ZxhVCnkqJObSzO5ExE4hr9l1J0QRh3LEuyc0GBSMlE3EV9z-ukpzf~JnxP1UOOi-mPJ5OwTTbBLJdgMEqabXJWCQJPIy7DMrWASSA4kJm1uVi4mEBrg9QqzlVLdozF0MQwYdx278d9QKpr6C3xAg1cfHTp80AhP6lXjnkT0sOpDisw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "netflix",
            name: "Netflix",
            homePage: "https://www.netflix.com/",
            themeColorCode: "#E50914",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/netflix/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://www.netflix.com/title/81457258/",
          videoLink: "https://www.netflix.com/watch/81457258",
          quality: "hd",
          audios: [
            {
              language: "deu",
            },
            {
              language: "eng",
            },
            {
              language: "fra",
            },
            {
              language: "ita",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "fra",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "zho",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1732806650,
        },
      ],
    },
  }, //bat man movies start

  {
    itemType: "show",
    showType: "movie",
    id: "414",
    imdbId: "tt1877830",
    tmdbId: "movie/414906",
    title: "The Batman",
    overview:
      'As a manic killer known as "The Riddler" picks off political figures, Batman joins forces with allies to take him down and stop his reign of terror.',
    releaseYear: 2022,
    originalTitle: "The Batman",
    genres: [
      {
        id: "action",
        name: "Action",
      },
      {
        id: "crime",
        name: "Crime",
      },
    ],
    directors: ["Matt Reeves"],
    cast: [
      "Robert Pattinson",
      "Zoë Kravitz",
      "Jeffrey Wright",
      "Colin Farrell",
      "Paul Dano",
      "John Turturro",
      "Andy Serkis",
    ],
    rating: 77,
    runtime: 176,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/414/poster/vertical/en/240.jpg?Expires=1769116299&Signature=cZH9aTgc9CM6UyMMe6a9S6xS5pAm821plip3K90mF4hyN6Xv-ytmw~EMl4fPVPEOqc8xss~xsOq4dg3cr-PGfWQ7-I7CvHpRUzjFLqcph7JSNtaA74UFZhurm3e~gPgDjfpMo50hUvTf0OC-O9FabXLaqP-qGNbo4Ie6X55PFXWwrmgT2NcenvBKXyDQ49dKqbZXw9MG7WqYfAVmK48KFsQm9A8O9bzZDeBgMjf3QFqd1rcUVjhG38G8UYKhMrrjOlQ5wLcZtbZ601gQdrjWJUq9Cj345V4WRJlrN~OgNlQj97ckkCh2NN6LJugdohkrSn-euh4kslJYYMZjoOGsSA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/414/poster/vertical/en/360.jpg?Expires=1769116299&Signature=UFlIgTcVPhGUNSR~~X3X94wnvwCHO9LY7P03Qz0tFBWWrhI8Ow1G8lXPrpJ4a6zUb5sF96UWE0ujo~6tFCwcTV6C5YfCuhFBaZyjSASR0U~C7dnJJNCfu5UXEd720TTsCMYvy~UgjSXpe6~ZCHIJxYRzEy46HA8X08YjLo8si3U7TSU~Tmm6BxiGh2Jm3-EpmvZ3d7Y3IV4ojhoJf~iD3KXuV6Vwhzwl3hnL8Li2gZBIVOA2r7eHHaJ~whTMmYIpdgQzvvley4Sv50zwoxtnLPP6W1ozM5842SJ-8NNYuLIOMAYsW3aIOIKrCpwkJ1CDziziwf2X3krj9RUIoPgefQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/414/poster/vertical/en/480.jpg?Expires=1769116299&Signature=bXJPCJTj7eV3iFq7Q2SbQn1OiInpB~-y4Egb26LOupIbcu--pwRdfv7JIb9o-K538DyHurhYw70Oc82ZltAI3lmJ4GGwKgh3PzMNLSJ5vMUfV26jvUCj-W4JoV~GjiUdceaL14bY-JzgyyRKAHnNkXpmCPge5rwFOcQ5WkTmT0xTqXGdjdrQ3RSxjrDDnEApZeoR4UgEFLVe8iAVC7J~I5bz6trK00h9Kg6fGJqxzUWFqv7X1do59uCuYwPbKr47l8BmzvzI9S295tsc7gkoxeZVKWm-QYAjDq~5ISxbiRU9CejjqZPTvbh6iumhsY1lgSfHsW3KN6-by93JKk5ldw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/414/poster/vertical/en/600.jpg?Expires=1769116299&Signature=ebJaZtV6vXX2IdfkxC75tAD0EA5SVG93YTX8mtYG4ry72qFQjOovvPzDzLmLwwV2vnjQE8FhFpvUHa09F5p-klZobiHQbNIy1hn3WTsa0mkIj~h0Ado7yRtP8cq01s2fSUG44~uC~YLLQE8rr7gOfh3Y8ZdYSUvYWUII02a8XhRtbRTybJtx-U0aZ2a-emPV0mKJEa-yU0cSHIn46gvVSgWbz3hCirN7nMAe2nNTGVI1D1APK99uh-G8boOPtIWRtYx0hYvYSmk70sN4Eq7SQ6mj1O6RmtlkdGhx6JN~scFBdepal8AbdaBkI6vYmk0AuRLg89ezggr8BtSxLVgmVw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/414/poster/vertical/en/720.jpg?Expires=1769116299&Signature=LjaSSy0NY0lLZB8PhWa-NIc5tCqO8w7BY1Wq0OD6-sqEkeuk9Q9-E2dXZbvwnHTqAJtnWvxeYb3GiuBc3jre4D-ueyJCozGi~ebPx7T~M2cghT7VupumUz2pBE3GQJxYJU9yEH31iRDDv5DBhaYwCiU0k~JE0c35irYKXQWr2Sydj76EBpaNuEWfSOEHXWtxPhUA~tLxvhFiakrwo4sn8ZZvU-QlpHLB1RKFMWTJYGdTqZyhdSujueZkFgVgh4ayw1XsOU9rY8CHOE2ZgYTeohwoNLyNl0B-ryGalrV0463VowjoHJmSXVycYEJ9xw8iK9DfcLmvQ5q3PYnEVe88nA__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/414/poster/horizontal/en/360.jpg?Expires=1769116302&Signature=aQVmny~R3xbd-vmPoKZMHLvaNFcCTX0kSBwXoKut7s8GZhILozPk0xF35QZUAuB7GUWYzfDJ2zWdZDkupSHt~HY1grCToo2XuSWqZ~AbprTvL1-dP~5Hqn1cIxJQYmgSW5U5v3NobI5t44b3UKUAbmaADbbNGsNjPX-c4lii0iApv4lFMCXZd2T80fOOL-ODcHhW2FvYbyX3gkT5h5FDYDnRU7do6g8Ccmv3ruIxOwEaDGbqstHEU5-lvawfMOM3~eHQIbyMw5y2JCH8oVJtaOiWC~39cYxgaM3CWqmkwVHjOyU4VQt4C4Em2hku3WIeCDh69Bl1K9-gW7l0zxywqA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/414/poster/horizontal/en/480.jpg?Expires=1769116302&Signature=h6d4yknwMESrHIcm8qD~OSkKAhvUHShrwCQCm6Hnv6BeqZJxnHB273jNXAehRq8sFVIUIK~1kSgsTzESysfIjEwc03nCdJBZ5S~ZNmtzQepytnQiBfalgcC~Qd50DRUnZMCiOh3z-h2Glv0QvtN9nPKcYdPQCnPWkNlvU-9-rbr2V4YVq5OHHgkzPkawqEFHgga~M4K9z-Hju5rNsYJEAlC2foJZDzxI3aCsNB7KI9hYM~FabeRNEVIwKTe497XypmSdGOcm9Cde7oR~BUcLCTplm6sPFRcIDoC8Ab0BjR-gM2jLYyFHhNqvY6QOIxHabKT2ZK0J0j5Z-Rtl2bNKyA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/414/poster/horizontal/en/720.jpg?Expires=1769116302&Signature=LG~uAxWlD~g6Ny--S1Ks8r1Y9Z0VwiakcAcGv-5MRokkIJvrk2EAelfzbwaPEO78H8Rv3MzIlsub-hwY7Jwdiuf2Jlh0KS3otJ0vVoD6KQil~Po-vh-l4ZQ8q-Xev5QASoEJaviQjYdQ6IH6xau0bqJd~XFxdIRMtyB5Q6un0ulMHAClvKhvJ0Btgvef2fDDYnw4ksgbhekWJHLqaX7Vq4drUg1JKLu~dJ2Ks7-ygie6f0Ut7MDWyvN0V4uouZFfdqx0trvgy9FxhsCMm5eZXWlaQ14tAi9XBrblSfam9ocMhNu8d9yOl8JCxpzkY7K6fNK-rKaNzUl3AUaDkpH3HA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/414/poster/horizontal/en/1080.jpg?Expires=1769116302&Signature=HWkjoFIrx6Brd20Rf2U64aUonUPijAtpvlLVIW9LewSoUFKn3HjjNYvXx0nbea2WHCbuIc2lrTBjRrBEZ44OlB2Iz5x4jylKETVQ86io~7HuYf~Sg1xhuJ9BbLVC678n5C~-j1l9ksNj0-0oO6gF3VgSUjZJno2h2lIxUh6wN0ehCTpbnDrhGuah0S6IQN8qEz462v6nZJoO4pPcqPKvi6DZ9oZcw9MtkyzA3DeZ7g4uhXIwGQcsD2q0DEv2AcTNyGcnw1IsFR8Tf0ZOSgsjJ138p2xbSxUBTIeDAQqedW5JwYRHcy8s7H6KgoVg2z2bOrYbyo1dDSZNfMWim-6a6Q__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/414/poster/horizontal/en/1440.jpg?Expires=1769116302&Signature=iRw8J8T6m-r2dXr0exjgvFBM7bk-OdNupc08gUyKpE-gEwCJ~gF8G~nDYr63hS2VshlKkOH-DSTgc4ihl5zmvamCWCXY~ZILfVdSO0XuzPHUGppIwfoglmK9hf2PyyIt63dT5ozwCtFEKrKOW6VjaubmGnJzp5egd~gI1YigjBgJUN-UBnkhgBsqLNt31G5sZgvmfvmWU5TNf1DUCgrVozEK1nq2lg9kxORcetjSFML4WWKApXxy-CnqFarsHwm4nQvBo6zb83wOMEPZt8CrOG3vQn0X8ntgaIMoGDN3dVBLJgY0doBMDqmLJ3b5OStYiN0t8zkXxuqfnhRrEOcuvw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      verticalBackdrop: {
        w240: "https://cdn.movieofthenight.com/show/414/backdrop/vertical/240.jpg?Expires=1769116292&Signature=TDIx8EGBPri1-nAI~yGPFoqimWuFJW2h2qEMQ~pk3uKHQaO6Ct4V-KtGteDaQUMR7Xt5jgCdzGJgsNQaB5D0c48euBGabeftgqtKAKWcf3d373xT6LT1ZK1RgCoy7BAKtxzcrG9yIrT0ftCVF6CFhkzxXbviQWUWfcConwPRKBjyG5~mOqYXBwjNNUkbM2OymiRlCIOmtGIRhgzhUrmvPZZry6k4ScxituMDjInQ6F6IXnspQQiCCIZhkikWyqk0~aqnQlLV~EdOvpw9AvqwbfHkbT0ZnXpviHZdxPj7p9h9xBH-QdiMOUnKLFZvFj4GzMOHXCxd45lSLnrQMfFZIQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/414/backdrop/vertical/360.jpg?Expires=1769116292&Signature=hqvK2VY-mYLung-kOe0KTw1WMd6BaII5gVvKc505vvGfcibxkP6~xXsB4vWVw8j4EZNxT7vBg9-dvspi1i1gygJj0UUqkZSa-qKZK7idMMjp8hspdD5YWR-mDBKn~7VllYQ9-sAYkR6XkAJFwh9xFIFEy93QUe9axeY3IUL9cJJ~qpXliM~NqEOreayB1glQuVQp-jUq-gcEokdIft4OV9bblniX9~pbFLTqNXg3xIxruyn9OsfnQPtg1AxJmRuh6Cq5OG~Rs6JurR4kFQcGaQSfJ~C-pbFIGZQQ~Q4UNsaMPAijnt2a6eGmi1Fq7cVywoNvKCVlVlW8qrOZVL4gHA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/414/backdrop/vertical/480.jpg?Expires=1769116292&Signature=OCGySwRodxG0iP2ajRnnoLuwhtdcLWCsnfqN7syCij1XZTjuyPbmSsupPagBOlg6FPjdqpOWjsVl0G1zhenQfa99E0CX3eqv81uhtdMDUH8zFsRYsaZsK-Hvd8g09S6PuqxhmMmm05Xuxtoaz3KKW9L5IIrXQs6D42rbutATTuiFjCi5XEhUZUm30-RfgKPaKWIABHKSZk8JqzlKemp8DXSqA1AznsxEn6jVz3x0oUuCQ4bdcGad2y9kynPholuvElM1k8NNE3DeQOt~IWh-YFVgxbpg751p6LsYzP~2oX8LqDMC401LLjU6dU4jWngQu~28X-G4qk96NfCmWKk0nA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/414/backdrop/vertical/600.jpg?Expires=1769116292&Signature=XH2o~N14RBVnqBHAQRKoLhSz75dIiOD1InGvLHC-T1hytBgtXAADgr9PDp2uhFPhXejQUfzwEn-0X7Yg9rs1U3Tp8W5JWeOnNZr65c2pCFEMR7Xx5CyPdprheLiyiqGc~ekFkGKLXk57Opy4uey2U0BDh4FSVV2FkfMZchKwqQEUXHnk712ApXZTVFsTa0L4cZNJQlq9-s-6dUoQnPNp6FK6kYlwbmQ0HCX86qsXAxVxPnLGjfeN5PPpJtBn9hOamlMH-349ygfFbyPfTRLAmdjD8uuBwvAVkzgvdTr~lTc7wDItMr4454OqN~cREVtHKUtK8gRCU60B0oj6xpNe9g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/414/backdrop/vertical/720.jpg?Expires=1769116292&Signature=MihWmYkAnzFefmRSwvmgLyIXjuFGMQjYe11ZQoVuqKezB1B42QO3435W2a7LHl7wzCsQBuNF3MsfARsVPT~vA0HeEUAR~Shx2ujB7wOsoonjG4idTwlj-qVC7rqqxWjMEDopu4PqJxZ9hLT9WinECXPNPJ7r0ds0PpNn-~Gii3wKrSTqco663MMnC405SNCkXjOJFfQ-E5BfH-yIC9XLc33usQVqG2zUr40rLEgAIKQQbD~WVDJV5Eh6IBsCkOuMwm65uTVm~QUh2g1ibj6VYA5scBCcvydNIWPrx4lhz3p3nkZ0bx6iUvXyZfPLlBcYOzjNBzMRSx7fvAJBjaiqWA__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/414/backdrop/horizontal/360.jpg?Expires=1769116295&Signature=TFXR8VBZWSDMjs9qC6RKNuyZvR0tKVhOl3e6tlSVa6uJGwCcJDIEq7dKeFavZ9y0KuMkaEZ6JTfhl05-DDq~PH4~XoGacy-EqFMhwH5aLON3jWLSfaRy12sW8GKn6mcBt9sRq~2PPiChZVjXbJ8yMvf3nH1KESDJZtzqXOuZlJDkz~LUUZRKR6vhHcdzkSc9l2dc2OehgPi6E9u9EfEWkwpdaCPSMIScWxALZGcB17OYpmnV3CLZHTX-HnKKfUfVuAYYeucLSUMhzmUHAS3yfPQfS9Xd7t6~jDA5-6XmKcQK72JhTsEpzKJLM42GbTAdPuLjoI6w-zylkI9c-9IGtw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/414/backdrop/horizontal/480.jpg?Expires=1769116295&Signature=Z3dXFttAw~WT211KF24Ew3tNLgD3zx8czUFr~ynt1d8bjvMimWqcam~nA3HAb~bUtlwaQjp7nvZUFpKJl4QXHhRY-~eoND3wTAQgJqRaBgSRaCWX1V93yMOFpXrWR8a-UXJHbGAAyUwIrFgUlA7lj1kSTfU0K42wdX1q43V3Xp4IlbzCzDPhAomqVQjtP1CxPDAKNBMESR10cTZ8sCX1gSNQ0tYXmlH6xv2nWX9JReUsvBbyA60mezikM8~kcqcAVw-0HI8svpLcGnBt1f3mBisnm5JkTu2wgec7ntOJXaLItamxTfpaus7-9NFRdodxjKHGt~ZVena~FfbLZ1sweg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/414/backdrop/horizontal/720.jpg?Expires=1769116295&Signature=AvXzdtyACaxzlNUOGpo67Ze0vRQRzlGJS0roVt0o87kV14mDqO08tBMLQeO7mJS0dWnZhBNR9qD7PoUy3qYBrxK~Pi3dMzaYOV82jyUEIWQ25AL86TZneDfxtAx3A1UYjdNhdy~Gdmuzp7uNX6bKzrHaKH6ik9snhkI2VXXNYo9AAE224cmHL0TyDW2S06YcM0qXen1nkNDmkMbOcsKicJooxzSKHJH0Bk3b46vU8FUmzpL9pThrkWPyVsiFkUNC72ZQDoQxj-y4w2qTRpUTkMxd6KIkmpc018CRBzbCY7XapQnpq3UheMTqUXAi4L-QDOGvCe3cMOSM8z~VjYmy5w__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/414/backdrop/horizontal/1080.jpg?Expires=1769116295&Signature=C7FMS10bNZD5IHZt9Z4YfrWsBRPFikt9vWG7iHey0TH~ztX~zaZgG7XPS~GRy69pxpB5mz1T0RwgO48dYtbRMrhhbgGOwwrNjdLSb4XtJ2cpoaTAtJZtnzs1ILHNyHiyV0eVVT~sTpDoAUhpYfhavMmHWpCrJBWHs3pPAc2KC4tfAOoUXudDiz4UYzql6WAc-C3QEmLXyO1XiuxK783hraEZoDzSS6VJijYSA22QuFbYD~j1NPx2Z2UZ7mjj68Lz6jnM6fd7vDWe5SgtAMwGYZeTIjUB36jwMpcTdnZwq1vcbH-Zhi0SLDNiUvZnJY6eDCCWyOzQ36oRJO3ceYvgCg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/414/backdrop/horizontal/1440.jpg?Expires=1769116295&Signature=dta3paNOzE0ii7mAnE4PJgxD1XHu99zUQ5YYpjTUF8kocNn5d~b0uubj1Atf4J9yxhQy~wk-3prSOU~PlyqjGSQIoZzuycCXH9OB-Oo8UakAB93AdEaMR~KYOy640S89x3oLt6L-1b1HQQeeD3wPVZFGYmc952gYaym7kV0HwJ853Pb0DaunxfhGXKKuxhM2AhjikaaXLETz9PxBJT69igWl-GSYpW-cAwcWNd-MD6qUFjJQkLIvDNSJP79jHS9IWLL2jB~SBWlS~TQqd9EP~tNsz8EMd~NBQOjSmP9xPytsDjRT0CHapdvsPUtqo1OYbTP8XWUOLcloqE29fXUj4g__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "hulu",
            name: "Hulu",
            homePage: "https://www.hulu.com/",
            themeColorCode: "#1ce783",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hulu/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hulu/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hulu/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "max",
            name: "Max",
            homePage:
              "https://www.hulu.com/network/hbo-max-1b3523c1-3090-4c27-a1e8-a04d33867c34",
            themeColorCode: "#002be7",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/white.svg",
            },
          },
          link: "https://www.hulu.com/series/batman:-the-audio-adventures-c83d5384-269d-4bf5-82d4-e21ac8bf355e",
          videoLink:
            "https://www.hulu.com/watch/9b7b785a-18bf-4ea4-b41c-e06512328c0c",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          expiresOn: 1947470340,
          availableSince: 1727314117,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://www.amazon.com/gp/video/detail/B09HZ331JP/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          price: {
            amount: "3.99",
            currency: "USD",
            formatted: "3.99 USD",
          },
          expiresSoon: false,
          availableSince: 1690128910,
        },
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://tv.apple.com/us/movie/the-batman/umc.cmc.75o96q32hcm2kzx4ilop1ylmx",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "fra",
              region: "FRA",
            },
            {
              language: "spa",
              region: "419",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "ara",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "bul",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ces",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "cmn",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "dan",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "deu",
                region: "DEU",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ell",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "est",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fin",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fra",
                region: "FRA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "heb",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "hun",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ind",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "ita",
                region: "ITA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "jpn",
                region: "JPN",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "kor",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "lav",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "lit",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "nld",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "nor",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "pol",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "por",
                region: "BRA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "por",
                region: "PRT",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ron",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "rus",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "slk",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
                region: "419",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
                region: "ESP",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "swe",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "tha",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "tur",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ukr",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "yue",
              },
            },
          ],
          price: {
            amount: "3.99",
            currency: "USD",
            formatted: "3.99 USD",
          },
          expiresSoon: false,
          availableSince: 1659766455,
        },
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://tv.apple.com/us/movie/the-batman/umc.cmc.75o96q32hcm2kzx4ilop1ylmx",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "fra",
              region: "FRA",
            },
            {
              language: "spa",
              region: "419",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "ara",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "bul",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ces",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "cmn",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "dan",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "deu",
                region: "DEU",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ell",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "est",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fin",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fra",
                region: "FRA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "heb",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "hun",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ind",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "ita",
                region: "ITA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "jpn",
                region: "JPN",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "kor",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "lav",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "lit",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "nld",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "nor",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "pol",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "por",
                region: "BRA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "por",
                region: "PRT",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ron",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "rus",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "slk",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
                region: "419",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
                region: "ESP",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "swe",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "tha",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "tur",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ukr",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "yue",
              },
            },
          ],
          price: {
            amount: "14.99",
            currency: "USD",
            formatted: "14.99 USD",
          },
          expiresSoon: false,
          availableSince: 1654532239,
        },
        {
          service: {
            id: "netflix",
            name: "Netflix",
            homePage: "https://www.netflix.com/",
            themeColorCode: "#E50914",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/netflix/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://www.netflix.com/title/81500601/",
          videoLink: "https://www.netflix.com/watch/81500601",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1704604741,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://www.amazon.com/gp/video/detail/B09HZ331JP/ref=atv_dp",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          price: {
            amount: "3.79",
            currency: "USD",
            formatted: "3.79 USD",
          },
          expiresSoon: false,
          availableSince: 1732498205,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://www.amazon.com/gp/video/detail/B09HZ331JP/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1733925482,
        },
        {
          service: {
            id: "hulu",
            name: "Hulu",
            homePage: "https://www.hulu.com/",
            themeColorCode: "#1ce783",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hulu/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hulu/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hulu/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "max",
            name: "Max",
            homePage:
              "https://www.hulu.com/network/hbo-max-1b3523c1-3090-4c27-a1e8-a04d33867c34",
            themeColorCode: "#002be7",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/white.svg",
            },
          },
          link: "https://www.hulu.com/movie/the-batman-54faddb3-3315-4e1f-9f86-3d55409831db",
          videoLink:
            "https://www.hulu.com/watch/54faddb3-3315-4e1f-9f86-3d55409831db",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
              },
            },
          ],
          expiresSoon: false,
          expiresOn: 1767243540,
          availableSince: 1726685510,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B09HZ331JP/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          price: {
            amount: "4.99",
            currency: "USD",
            formatted: "4.99 USD",
          },
          expiresSoon: false,
          availableSince: 1690128910,
        },
        {
          service: {
            id: "hbo",
            name: "Max",
            homePage: "https://play.max.com/",
            themeColorCode: "#002be7",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hbo/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hbo/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hbo/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://play.max.com/movie/dfa50804-e6f6-4fa2-a732-693dbc50527b",
          videoLink:
            "https://play.max.com/video/watch/306aa55d-38c5-4614-b75e-ca7433887790/c463e2c8-e703-466a-bd3d-aa02668ff3cb",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
          ],
          expiresSoon: false,
          expiresOn: 1767243540,
          availableSince: 1687875109,
        },
        {
          service: {
            id: "tubi",
            name: "Tubi",
            homePage: "https://tubitv.com/",
            themeColorCode: "#ffff13",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/tubi/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/tubi/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/tubi/logo-white.svg",
            },
          },
          type: "free",
          link: "https://tubitv.com/movies/100016185/the-batman",
          audios: [],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1716081679,
        },
      ],
    },
  },
  {
    itemType: "show",
    showType: "series",
    id: "3289",
    imdbId: "tt0398417",
    tmdbId: "tv/2022",
    title: "The Batman",
    overview:
      "In Gotham, a metropolis where shadows run long and deep, lives The Batman. He's in his mid-twenties and just finding his way as protector, defender and Caped Crusader, while maintaining his public persona as billionaire bachelor Bruce Wayne.",
    firstAirYear: 2004,
    lastAirYear: 2008,
    originalTitle: "The Batman",
    genres: [
      {
        id: "action",
        name: "Action",
      },
      {
        id: "adventure",
        name: "Adventure",
      },
      {
        id: "animation",
        name: "Animation",
      },
    ],
    creators: ["Duane Capizzi"],
    cast: [
      "Rino Romano",
      "Danielle Judovits",
      "Ming-Na Wen",
      "Evan Sabara",
      "Kevin Michael Richardson",
      "Steve Harris",
      "Mitch Pileggi",
    ],
    rating: 69,
    seasonCount: 5,
    episodeCount: 65,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/3289/poster/vertical/en/240.jpg?Expires=1769131509&Signature=CY1ES8MxjZqMfCs7P8ZQelZ2KIphHDfWckxwlRWoLbFFrOk8FpfNRCMMV8M5D0JGUdomr-Xlr0aRb29cD3r2CR2ZpVCicw6GvHJ1oQp~TLLiUguoPYNpN0-64oMiRZwVXznxkv6rz4LkOl4Wth3FjgBc8PJzjOp7-fwv-buxPOrCx~VCff8tALyKugjQX7LPskwYEhSHs7FI-PUTInnGI0WSPsEtCAxqUF5GTMAtkMIsT~gSWxBfIwhmE1EfhCL5n4m~TlplNtm4f1UPbq6CGhMFrgL2qPTEPJsuqaoYekU-WfayK5YBs00yi1P38x5WZ76TikqmgoOkl2xYrkUQqA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/3289/poster/vertical/en/360.jpg?Expires=1769131509&Signature=apmkIOgqAFwZMbHLSYv4DzyE59wYQrbvbPa8m6QFrdWpkMhiUrnpqNrZvyyVlB~7eXFfyMFXtbH1vvUl-Wwq0tCBdF9rJ-TZaISMpSJv1xrH~p2pFNqZK4UueQoef01A~GstMjPUK-RjTycLbaIFMkYMbs0P4mLGyxgx4rLJY2k7yUl4sohetyjDewVAR8XJDuDrxTtTR9iXEXnsmj8MFUGcHVNOhMNeIAAxPu0lzc04fDdL8YyMgSc~jhzC2LEyr0hMXhBox2S7zeuccdlc-69znx7ekOuS9nFCSH9qbaX0RBE142b2et3GDrYA8LMcHt5nnfybLm06Z-ZPID1bWg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/3289/poster/vertical/en/480.jpg?Expires=1769131509&Signature=Ovvre~LeMmTkF3YXpAdAg4bz84saTdW-Cf3kQd1uzEQayHWIP6-19AtUhbiylQihHDoDxg-7QqeWOgKZxG3OIMCnUKHgB3Ab1~4PbqenJYrjsCbagjKzPUX16xCyI8~LE0iMDdSrMJgLGp4w~ngxTYDUsITswsUbLfEipC5BJugkKhZ3FFcE~JWlK1UesE1lz2Qu3VxxDNJwYmEp1p2t4M--LSNWKuu37V69L-TFNU1TNSRJgIUaqPn0j1XaVzjyzi3DGZ5MOlzAhd0E4fKqIDWzPBt2sMC~iCFIkUyCOTuqgzcjw~geOmQE4hYrdyDcX~MZxZk2LU5VICkOy1m8fA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/3289/poster/vertical/en/600.jpg?Expires=1769131509&Signature=KOzPO5lB2FwQ8B39UKZ45rIDc~mnx0tfe1jSyX2GnHY~Id1SYxmLRnLhNBmSrSBaIUof9n366eYoFMpevbQw6GOIomXL~UkV5U3QsZoNRVy-yQeU5oXVevWjqM1O~jaO-Y4GLr7fwfVPcVVQOF95YZ2UXeyZgMo7A8JyeMCkNLZWjmkTkwA2effsWweR65TK9usAbDy0OxzOorxjA6aanOncTYEUw0lTCnWqGhR-o13yumGy60i5FHI8EM3ti7rFBnYYC8JvHjINtyw2jzscGq9xHxUba~q8JFVYf5jD5ZVeq6hI6HOi4~p9mQ0jSzToZUwasZxLqWQd6AVtty6Sdg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/3289/poster/vertical/en/720.jpg?Expires=1769131509&Signature=CBYeU00FuYmUV9hrSnEXBDcdD3FWc4U2FniHC0eEsYH-FGbFb6XZQtoMpITMgIDrOFQvD6yz6hZOjK5eWjlw5ypBiJrXtYzXFROrSds17YgU4j7PD1LtuMloSwoiKvK-FrteyF9z1wvIKWFwra0OiOx947C1muF9EAJFawJUf1K-Rqlx-WaA2jkrmk5FgH8TQEXk-8L7Rekv-e7VvXMoKG~a5iC0GoNGbjQ4v1gg507tIPa~up6s6CDkj9S23Fj4owoX2F68e64ybVIOgqVUo5dxB8y7yID62Sl~uK2nAG0XmSybm-RyjT~KkCkEmFg874wYTtS-vwVLjgZjakm6nQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/3289/poster/horizontal/en/360.jpg?Expires=1769131511&Signature=SuOlaXsASJJdIbAAQm8gLt9rqhzmVDRMpdLPO9c901rXdN3L5dwkN9YxVB3z5CpTHgZ38Ah6TaONtsYAx92kmjvGBBblAPBwAj91kW7hdGB5NM~fr45LFkATW7lZPQGtPHMfMlF8TrQNwB1Ps0apW3FTjHTxQPD9U12j3TCLCQDSY3vMm51AIzoMA7JMMMILo91bM48lYuTHVj3~uf7EgcoJ7~crNvzJSGYIi9Z0hv~kqoxKPASk5q9-iu9ACrGuG42CId11Cd1yuWc5sLFXdzerFooSPvw0j0xfx0DR~osEJj2fcJHNBpq5fqGaHcwgw1ms5hgT-8PEFttuX9BMuQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/3289/poster/horizontal/en/480.jpg?Expires=1769131511&Signature=XEqLD~GYlryibt9DhWk9PBymbQggOqR2rMrTqO03DQyguVL2O8-uLuw8IyKIdDO51Q-W97HHXaRyMLYVEe8Jx5m4pQQVpv4PSZFlNCUN6RnlqbzR0Vxfa6JXLol57tb4fOVDnceDBblRAiYvncL0PZWXXzB6Zw7yO9kkvxjpgbNWCxIsjnqvpZHVX0anEFp95gWWSKCdav-yAuaEQc~yFjBCToxxLMmbBlerhVBstaMARL7Unx2RlJs1M7yNQVDgKxFm~AZGuAsR4zT4AUTVtqF9TdCXvxPh4shkvSwJ7ojwzX9ZePgx5atJqDhE7ha-ADuWXUCbZDOQ528Sij5yvg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/3289/poster/horizontal/en/720.jpg?Expires=1769131511&Signature=FNjwhuLFnnt3j19szaY5ahD1-8u82pZ~vldVqJjdyPCOymUYGTAdU16v86ppH9WaRhsHatIxQDEIp2VkNLQT2LSGX2KWlEzBeXhpGs8C1KWYq3TtGU~lCY-ZSvGr-shHnJ7Jwmh0uCM03qu7WnurxPgE8~kkOJtCKWgTLlzA5aB24wwQ-iWr3TXgK6H6xw~szcIiHBgIhf5vYAJL~PTOVyujOkkFbteK5B1J~AMYf9h2TpALNcqY0tAXxnFOeIT68WVpwwEsHyuqjjNgsL~iiiupTWw3GCcAbXrzM9~pDZuhOWDWQ2M5gG0pzfLqU6goObhk7Wg71oNy-AwXgcABUQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/3289/poster/horizontal/en/1080.jpg?Expires=1769131511&Signature=KBfjM8n5rMHcHkSzpoRnuWqHLSDSWw5HaGJf~7pY-kXWFcF3SCNLrj~BtbaTX9IbnJmG0OZlqeXe7wSt-GYs-GSndr5DvYsMfUuDsqf5v0H5RTp-kDdsxis8n~0qMUBHZA0Tng-agECPjziAEATPJK93qmn4lb-oSJ5jvf9vfLSmpspv53JkPoO3swS4jAn77WpOOvkZoaR5FJVYqGyzeWIEto7Isy4dBmZ33U~jsM8kTlG8mNX7~J8SR9RBQdEZh8o014uTHv4Ja0Xw5Z~iVdQLHIKXyUGTzh7EQevOHg17Xh3gvq65wH4WoKvmB2PHzOmfaBcKgKzPmX-UwBlliQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/3289/poster/horizontal/en/1440.jpg?Expires=1769131511&Signature=FuHi7BRZrpzvNwYbuIAAIo7nqxdIwf0~bW-Pk4CcC-lSY28o9MPsR~pFe4cuGtfhf7oW8MM5VsoNe4nkykhlKxZO8EoQQ~OsZ3DR-LxqLlDhLA543aCcXoBm6sEvo3g6JfqwnY0SNsmRpA7DXeb8o8lfiNLbn1ly7EDAwtXZc9~~MhhwdGuRLnT3dYDYH3r4qftuE6V1W5XYoz8XwuA3T7dKhwfiT4UHb5NY0rMyZNHd6pOMb725MYLGxWzJevfBUegVhaucnXpFXg8jXrTaA8VESY~~hugH-Ibjp1mJsWZoO6i6WYHd5SIszdOVERuQdny7oNT-EGYQxrv7vUSDUQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      verticalBackdrop: {
        w240: "https://cdn.movieofthenight.com/show/3289/backdrop/vertical/240.jpg?Expires=1769131499&Signature=OKKQpjXG6hZTrb3oyAdsuffNliZkAC5~d7QQuVtH~7weZ1cyJo2sfS1Ld3jPE~OGKVEZ-LjtH9q7uUbrttHHm8KbT2U~pTfo8Uk2VQPP8QUccOq0K-eZ7Ba5LPWqKPJFhVyDVNg8jCHSay1pIYBILed2cPJ4l3o0yqB0~TLcZ4cF7Gj-8hU38BrmMiWiH2dri~OmQE2nPKe4iN2Ti3UOpV8pybqOFOM2LDF~sCToqbB3LKTX9~jHP3BXuA7Wki698TsWGL~8DiwQ61AuLgP1JJtl7efdjqW~we-4KceTGvyy9Dp89rJFVS2VHx6CGALG8-UMRftyou0se5Y-XUo4kg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/3289/backdrop/vertical/360.jpg?Expires=1769131499&Signature=KU-JxzoAzKHjcdcUcxJhcX8Ocigtn3yk1kcpDN9kxESi-zRRZ9fy~syinLbFDNi7vWrLvRFxPTvrDUz3ZYJ3lZRz1Lcg87cz7qZ3qaacS6T4kB4ArHxwor7D7z4VqHZ0KRk9UJbsQqhFFMclXjCFdYq~7tDjwrbHJIipvaZOcFsfdfDbbktTZLhmYXUMLEKJXSqf~XFNxoGjlRuueZV5-7wbOlYbSoc6dqLLPNMpDMzyGuhJ1RRBIq1DUZ2I-1ujZIzHsrTZI-f8qKB5W2VprEk24uJjEtKfu84uZPzcGor59ZE-duWybYwBK~1mIkA7FYKOkMe0wfZXHHRfsU5PwQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/3289/backdrop/vertical/480.jpg?Expires=1769131499&Signature=OrnXe4-JwA5yChrPdc7hGhBHMBppMvsPmxDkacyI7kJeFFGeUlvjPBEFIsYXMID2TsDirJVM79BkoGgSj15XnAAJPH7de97nHpu88hnsoWvodfr4cF5W9gC0J2KytRFuOxylg9XNmbdtd80Y7E-s-ik7i3VgehMVzHr89c11TvS6UC6YrN9RQKK5rlpqzy5gEh3VYuXW341K4tdKmDe6By4MJdJtDIqXvRHfMjnLyoKcxyH4aMsgkl38wWe8ICgP4aH1VGQKOmJvSxY3mkMmlQRnlWfmoMqHW7h01RqyJVTaWRdtLguej5No4R3B3RW4XZcHdvZOOHooK~I6ZbyeCg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/3289/backdrop/vertical/600.jpg?Expires=1769131499&Signature=S6C9uQOj~2-vvtBk5hyF6qXqgpXMbus0x2rZgyNhouLc-eL~SlRj3xGkUiyFcILAvOvpMON59AUUX4YsOdlVDqh-BuuFegauGPYTTf7zwMO~-IKDVjfyP3tviB2cmdHCjGNKuSn0qRZbmAr5GYIJ0klN0Wt1NcctVsoyuJrY134Ar5M76iMMULsq8xj62yTItRw4AW82fd8CJUHNoTCdx7hEG6inuEhKHeaFmAXM4R5dQ2dKxMDOlQ~SChap3mSyoMoWqypV744xu7ajM1NtE0uqDasihC3gXK-GEI0Fa~0VwTr87RWQiUj8Ov8J0n26ZyjmUKciMrZwbW5kGZhbcg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/3289/backdrop/vertical/720.jpg?Expires=1769131499&Signature=aHHKndZLLJqv7rdm1GxR7QhsoTEge-Jo9xsJ1rq0MlfeXE3mwltYRehNmt5L3BHXO~ql4aWuEI~L62bdZBoK3O7813s7kkr1vAYyitjy1KrEpVUbbCr72~Piih-sFroEnUjNHR9Ds-uBTf3fIYchnpoef~rNsdt482LkeL48IwleEAQciCVx2nzboVSlqMOtsK51eCsc-SwT0V6Rb5kivq0eSBfVlr8Kbje02Ci4XfAUk8AZQ-Rw~-c~Y05AlHPVLN354dp1R8DMj0C-P63MatgzOGG~DuAIK5Mv~sBmJbTmAN~S7hh3X9WGJmy-js2EFX-TquGrbA~qU5gSVbKYTA__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/3289/backdrop/horizontal/360.jpg?Expires=1769131502&Signature=Ixl9CvHkHSc3X-hLNmXeK6lh3PHkyHJuu-zFIwilsClnTLzQ78OCsanmD1RklnnMVNwL5CkH~~8P2qKf-8OaD7hG4sQMWLu3ffPuZWqTr1~1VWl5-ap3QdIqi-W0fvT~qMp~q-X1a0zdpO7GrOvVL6ASpSvZvtA9lk048tm-qR8jyKfes8OYv4UfSb24y1CSgWZMCa1nCKarZ3Pr4b06oW1EaT8ec2EOl9haJF6alrRwepC2D-DVzgi3ID3KDv9sGY4xjeK6pNxDZ7Uoqk8Zyajqq8WITLLYQHaT6KVKhDTxRlQoJl29lHgBs8yKuAz5SxJOtrxbJwNfMF9JaY4nnA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/3289/backdrop/horizontal/480.jpg?Expires=1769131502&Signature=coV70BrRLtE-lWJXIxaj6fHvHZ4FNi61B0n2RkjJXco53MquLFrAYcbLNrSVZa8ITfYmzeo4ksdS7hRVQpOAHU2DI~Yj5Mn4wnVbK4JjyRDh0xqVpMpDpMjQF2NxocOL7ARORpMciQGsnDkek68t~AvWCjpPMA6DELGUFjEsJEE3EVoi2VehyX9I-Rj7lzwH5RodIt3AIGjLW5k6xYo-H6HKtqFvD3saPXDbCNY-VhVp5OvktkY3ue4ZXTfCaMA2VsUWhPCIpyNZ~3aX6YJd1FzzpcZb2CQILD0tW-tL3OJpHPNXi7a-yYIjzjLX0k45HNpj-Vd-1UAM~EgKzTVUVA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/3289/backdrop/horizontal/720.jpg?Expires=1769131502&Signature=fpaJaUVN~cPcpSGooY2NjWy6YF5IofrfenTm0wCX0ZrG6BD4K9cL113mbDs-UUUrnnGhm6wp00p8oXVTitoT42-n6siO~40nX0omtKq2~Hlx-XB5G~EFsvjliY3aB8zOwbmhetcBaSaV6rHBBDWqLuEyEmmUgS7qURqiK4yVnDe7OePHzlJHi8QbgGt27Vno6p2-Az4kWe7k2ploMhp2ZkEVX7tT7oI9Yf8XIh2OXs~MgZjHOk2ImUzSz8fbZ1BCExJTaYuAjiFTmaP1r6I6ml-GA5ehv6FeuPMiWTa2H8HJSwAjEWszRrXs9di9nuVfOrhmMzFq1uouIb1U4qknxQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/3289/backdrop/horizontal/1080.jpg?Expires=1769131502&Signature=LAjOJ89OnaQoCFUnmtzaDnW6dK3ashDNRdagKFbW9-t1J-Zj2gA8-LTtQCquj8CS3xYFWzEp627GNG71UtoLDp04XpXTo5zM0AYkWKjW31yAfgsc1znEQqbyr397ov98f2WuiqBunLm0~HwIc8CBMQQG~qTRN1xBDz~xggNaKDdEGHbWijejMlIil~s3cJg9eGqXxKStzaBMYMhkM8ZTz0RMME~i1iZoubiFSFYzp8s68PW9O09ZS3dLleWFon7aem9RvHmn4SjwF6SXAaRl82gShqlrUrsV7Xx4lL3X909~lZ9UYo0B8SfBhqQyBfcLTftY8QNh-UcR8pNMCQZSSw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/3289/backdrop/horizontal/1440.jpg?Expires=1769131502&Signature=jjGFvLtYYGeeE3W2xZT-PnY1NfchHT26BXsVmkIE2Kbvu-emUOP3orxPfTzaNoahIcrpsJeltcSoAqf-93yMKLYD5q7IG4nKIQ2C92u5hOglAhg9hfDBrY5Nl43XiiNiy5k1srNGUa6EE~9Fg4czggbk~3fYPwhlqTMz31fa2heb7neo9deTtUmzvVFAiORE5rSZI4~ticP0Qp4qIAXpeqlhVefS76t-PjufetVQiF4Yljkh2BrldhwNUB5xvE6bFVF4t15VbyIyDaTxQfNZayNPq8xAtoapm9gMMeO6uT6~JQm8DuYlGG4VAS0WJ6wM1Uc2H84z8aiKfP-Pv39PIw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "netflix",
            name: "Netflix",
            homePage: "https://www.netflix.com/",
            themeColorCode: "#E50914",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/netflix/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://www.netflix.com/title/70177019/",
          videoLink: "https://www.netflix.com/watch/70177019",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1735690975,
        },
        {
          service: {
            id: "hbo",
            name: "Max",
            homePage: "https://play.max.com/",
            themeColorCode: "#002be7",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hbo/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hbo/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hbo/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://play.max.com/show/00c780d0-015e-411e-af19-60745c5ce92f",
          videoLink:
            "https://play.max.com/video/watch/f4b9135f-98ec-43bd-84b2-9712aed92213/5ab1ede4-9c99-45a3-8cc0-1f0b300ce894",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
              },
            },
          ],
          expiresSoon: false,
          expiresOn: 1767243540,
          availableSince: 1687870712,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B00C173YEE",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1716681131,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B00C173YEE",
          quality: "sd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1716681131,
        },
        {
          service: {
            id: "hulu",
            name: "Hulu",
            homePage: "https://www.hulu.com/",
            themeColorCode: "#1ce783",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hulu/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hulu/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hulu/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "max",
            name: "Max",
            homePage:
              "https://www.hulu.com/network/hbo-max-1b3523c1-3090-4c27-a1e8-a04d33867c34",
            themeColorCode: "#002be7",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/white.svg",
            },
          },
          link: "https://www.hulu.com/series/the-batman-062aa361-7347-49ba-a5eb-beb23fabfaaf",
          videoLink:
            "https://www.hulu.com/watch/2bfeae98-129e-4b1e-9108-e935b8e7274a",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
              },
            },
          ],
          expiresSoon: true,
          expiresOn: 1735707540,
          availableSince: 1729184179,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B00C174BR8",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1716703385,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B00C174BR8",
          quality: "sd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1716703385,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "hbomaxus",
            name: "Max",
            homePage:
              "https://www.amazon.com/gp/video/storefront?benefitId=hbomaxus",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/us/addons/hbomaxus/light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/us/addons/hbomaxus/dark-theme.png",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/us/addons/hbomaxus/white.svg",
            },
          },
          link: "https://www.amazon.com/gp/video/detail/B0B8JY7JG4/ref=atv_dp",
          quality: "sd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1692647742,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B00C139MSU",
          quality: "sd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1716767348,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B00C139MSU",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1716767348,
        },
      ],
    },
  },
  {
    itemType: "show",
    showType: "movie",
    id: "10393",
    imdbId: "tt0060153",
    tmdbId: "movie/2661",
    title: "Batman",
    overview:
      "Joker, Riddler, Penguin and Catwoman join forces to defeat Batman and Robin in this film based on the TV series.",
    releaseYear: 1966,
    originalTitle: "Batman",
    genres: [
      {
        id: "action",
        name: "Action",
      },
      {
        id: "adventure",
        name: "Adventure",
      },
      {
        id: "comedy",
        name: "Comedy",
      },
    ],
    directors: ["Leslie H. Martinson"],
    cast: [
      "Adam West",
      "Burt Ward",
      "Lee Meriwether",
      "Cesar Romero",
      "Burgess Meredith",
      "Frank Gorshin",
      "Alan Napier",
    ],
    rating: 62,
    runtime: 104,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/10393/poster/vertical/en/240.jpg?Expires=1769151875&Signature=jCYqRpw7GGiLHItl-G4RCq70gALLeJikUdWtJuBI83-~hR5LosnRpd7Ue5XzNY5gpJiSjzbQoTNN2xfrw0jL85TNXZ8HIu-IAH4xf1sZvr33FlPojyOP36e-JRftO2bA42OAE4NLgOlo67-0FH1MMRuGcTN9hvjSJwrBbMSVDzEE1xkJZJGGFfYNGytMQoIs1pgapkIhG2xeDsdSRjB2GdL2~Smrmjrl2zUvjFB~qsbI3l5QiPItYOUFYfZHAoo-K7WY3o1zxllDs8dAAxSCMyzLefDX-WkwHaxI1VnI0XIzuPe2sSAO9apMFIrbF2LxspDBnKpuf7cjfo9N~B8QWw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/10393/poster/vertical/en/360.jpg?Expires=1769151875&Signature=LBA0iQImOgVmm~7K-G0SYaSK5zFiLKkhOn6H62TiuQCSN7eFmQI0tfJ~Xlw2U9xGKFEqTsHEHqnbNv3B4XUxGXmSyRdiTgdWz~K-btUEnqqpxjGTVj8Yp4lwp0moG1FnoUQeglAdBswM4MjxgI9pkSjp4Uq-Gfs5yTCwt4wB0bDGmlVL6jwuB76-cMTsUEjJlcjeJq9BWv5I9MH7uy-2V6auCrgVRMrxl9pqIRTjq7NnkDTvo~bLtDXIE0DzvgB0WThrlIJ269EgoMRXTfgQylg042GEXda8GiYxMxmrhLVThMNwFPfEHHoBYfZgR8BaAVHk7JipW48sXE8iu6h67Q__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/10393/poster/vertical/en/480.jpg?Expires=1769151875&Signature=jDe6cYirkTCPoPojXGGuR~D2NplU~c0LC-dpV6EqcaeGe-Ha4KnapuFeO3vnZGs6nD0bfsHd5pws0uY~FOJ7NxluhwdiunBPOOVGuOajpEfbtsmWMc-oZUprlEFyBcb4SnPxJZrU3K1NfLAmU0-o2CPrMVj8X2dfikixJF1q57mZBl5IdTVUTfobtDN9iz9x2U2s07s5d5x6~E3XdtEty5S4g5zj55BHY6KPTkjoryckMKMmm2AokZjpw2EvNdG~U2sas8MPqboTMxngS4aJcwf1MqoFq-lxIeIfxFYnXYamby521-Bs5AOk-fd17AGA1m8MF1JfAEk99HxzAKgsOw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/10393/poster/vertical/en/600.jpg?Expires=1769151875&Signature=ci8A6Hto7-z4Kdf3gSIU0bt~WbQbeNKuM0Av0zXLbSm2xkyGFYWH5TcogvFTrgFfpyW0nFKnW8htoTv-XhWpILbYc0AX-0iuVzDorSSZTKpuH0VbxK0Xd2Wbj1K9SUowMvWgJrl7asw6Ve8D7IzeeT0~1bJ13fr83UmQ6p4OKxO086ZyQW9oKNDn8fUhKYETBZHRluWSB9LdLWHVf-TphsyrWsnpHLdvoA5woYpEZt6BsMNeFe7IEshD9KpleHzuBX1oA18q5PanK62BzX04YH9IPWBsKlAqzgTJY3E3BNVychx016t6JzHuN7RefY8FWcjlqjwkj2SzU4mD9FsK-A__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/10393/poster/vertical/en/720.jpg?Expires=1769151875&Signature=Ir7oWRThVH3dBLQw2lASzIpwXUJopC4OifINhP9Zqr5jwYA9u2hNcKYH5Qy4x8GYxbvdf0S7SrCcATcJpME1GEfBamrv35YK45ZfTSK1Sx9GmNsZBFb5cj698GUk8zQI~JpRvsBt9B9aopI2mRumhAXQRye5QPAxznLoQAH7gq7ZGzDc7o4IoCrl8-1Hw39U7XGbup3tYJ9fyDUphHECoip2GFPMOuGa-igk6HI4aoeY~c4DtOPtcnkPkHZ8NS3wTo4pIfLKygBUxTdCs9zjKsrsW5LZOOmwxIl3sc9LfbOIwK8V2zohdqEkks8ShCoX~R3tzq5UWwEw8Yj6IDg2Nw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/10393/poster/horizontal/en/360.jpg?Expires=1769151881&Signature=lZK1Kye2WoxI88vyeOKSucTDaQPhz08eW~uirN~gjrIrlts5gyKQs8T5mgzg95AhzR26KcEC784K24iFDfEMgjxolB4sCfY3XbQT7h41LfKXYvnXq7On4yxrIiSKVx3qbMmD4ZFmBRnuIugATAUNIN9u8Gr17BA9PDt12To8BcYZ4H0HiohOXjbLXMLyUeHqF41arOYDivl0uFW5Zj7g79PL5VCxczk0fEscIHtgJ0fSWxq6bS8sBYUJc-AwJTLJSD83VIgQ6dgYOoFb6aafRLJsJOA7Fsob9~1liKbtbxUG8sz1GjoErBAvwcTwrIUjgQXuccTEn8RH92MxQCARqg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/10393/poster/horizontal/en/480.jpg?Expires=1769151881&Signature=JL-RmKBNA221tTtT4boP7BBSRFKfz-Wr5VkViCj6FuC2IYtWuqGdXNUEFIL292Y~JQlFXGsLrRf~GcOu4KpNzKudihR2ijowN7LqnSrmlxVkZQQBEPdvqFqtVvG87IGfLOs4l7edt~V72QlFyKs0GaoR1X2sng3gZQ8GHOMh62pq-BfC4o6B992lkpygT~P3pDWXw-Er1fpEwb4y0PifLfKEMWR0K~UTDXg32PGGS7-hdmRl7f5m88GN1nVHnOW2Xt88BU801pTuNySwqUcF7808ANbifPj9FxTonJG89JZNqR~DRKtl0Th7ASjIZdXGpSbVOI0f6fq5GP6JI3fehA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/10393/poster/horizontal/en/720.jpg?Expires=1769151881&Signature=G8X64snQQRhZWDFSpMva8Zoz-QgulGeBNX8PgdnOdpBnGUW3IVR3yARYr-OzyDR2QoZCPBaIvmybDryjF9eUpfPzizzA~pU4EOQlyZew1pQgGOFoninUbc~twua~dVzea3QqITop3otyp1mRvn1t6UgYlGKffFPI89S1GlMRTATz526Hf-YxAOa-sjiEb4ItMHWPGi~Xq0Y7fiL~COP1fMJ7I7cWVVpuILT6xGKlLOzWRs1AbSUQ-hPZNplXZ4naNaHCuq2lsAJaPsXVKSxBUszCCnZhcDR6MQ6Jt2evzNrGpCEjrSFUXGAWBQbKxIo3YZwBveFbKA7PyT4vACQzPQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/10393/poster/horizontal/en/1080.jpg?Expires=1769151881&Signature=BqgzkLMQMZ8XSwPEBUtJXyh6FIOkbFVvRE3hRrRYB-cg56b3paU7w1lpSYOklODE8Tb7Bq9WdgQaDyZDG7klxdpV0Hlu~1pNE9OYQlpv8fmHVASn-gwX17SvqQHeduP4HXZDQ~QLB2wS4gDqFFnAwHTOwZJVbp33fRFBMvA2XN9eo0OPVQgHiYhsG~QOGcx0WTwKIlSwemloWfAg-KQVQjBtjc3FeAJR9WG~TuMy9WZ6m4j26HGiWqxIj-dD3od~kOjSnjEpFyUu0cSe7SuFtmGPAjhlhE7nQuWDArAi1-pjLkMFHthBSNFxPwuxwrgnFeAftaEmfw6~cIlJCHnAnw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/10393/poster/horizontal/en/1440.jpg?Expires=1769151881&Signature=at5dHX2SIO52pDe~JuZFi2djHJSh6kqhfF9PayhHMuAewFJYMSSAAqqq51bOA180V7FKWU6JJ5zra3Pp5JJ~ZnLoepjX-fWsBxF5YzVQVzwAH2aB7OQaRLCigjyN2kB1jQ9AWM14MWOw3eVleYrSFGCzlsQ~WQ3OiH6-Q6KQIIwG5bxhvDR08Kp3vyZv2IfJDyWAElz-S2jwXlHpizsIhLhXN-enetJqQ3IVvexac4ckw777VvKtVhCPH35P5a1dpD9XnbM4WSvUxEAXPCY1~jjsF7cgPEDm1jFUocDEckMlVdqqaqRtvvw8CP5cB8G7~gEi7pa9yCCvRdS-8QU70g__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      verticalBackdrop: {
        w240: "https://cdn.movieofthenight.com/show/10393/backdrop/vertical/240.jpg?Expires=1769151866&Signature=Vsc-bI5uSYHYqOxdNgyz4mm8JBo5OMgJV4BsdNBDmhxGmbGexaIqfhiUVECX4QeoeB4VZoLMsCIlt1mW1GLp2wpPO0cPPXb9GkXNst290Dm4YC2NU0Z11dG1RPGaj8CVAIhTbm4YlnD9kJP89Ctyd9abPIvRx9XaLHJO6w20zF27-wgJjc0hWqTgnXh7tIllPyNiry8OkB~77YrLHZDPIlvNYUL2AevLQ5uqMOJWKpcd~9rYYnDjOA79IECOgA5uuiBYl2Z~bDkVxGzy2FAZk5lco28Bby4RD1PFetQf-T3nHW4IKV0iKivcbx13beAET~QzAixN6KVFJrEpL5qwog__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/10393/backdrop/vertical/360.jpg?Expires=1769151866&Signature=F9klSHOB51zvzhkZIUZvm19TM0E3gs3HwHNTc~936hvqUKc2nS2O52LYpif4ObsyWwTFmBJ51IAoW-U03b~GgOdqflfLLFlGwvSdXVaU0aqXZGEPJ6FRwHFidtlzIPGIhlt5FXl-7k6-RbLkzCIllEvE6wwYHASNJ-dbaujxdDP6qwXqsKLlZv-KyG0uC3NftpwJW1Vu8mxckl4RYiCNJJ5YZjRPL08Sf~Z7xnUp87bhupvvnWWjsOfivQNBk2bZdQqsMEEPPXoDbkdgfW8Td5AmoWKwbeH2an4RTYpYu64KfBGLP1RWQk05vF4LBqKRQ34HChgg3zKMIIh7Yt7Rnw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/10393/backdrop/vertical/480.jpg?Expires=1769151866&Signature=XvFCh6YSsmVSPUJ1a-QTAALUXQGnOvTPavpPXUU-1X25CzbhUNK7uKc6hwIJHaEQfx99eBDwhOOehwrihv22WU8MQKXcymI1-pbDWr7M2mLxYJKnOaYNEgowF9duvCCibdEjY0~6w6kD~6RJgFPrzalDnZNi7mrTOuu5137NiYDjSx0FL6YfRrrgclLLwi3KCzTN4k9ovT6QLmyFU9VMLm2~ibZKNJMwn4FyBBDGBPfWZzvbYsFp0zLrtFrRH0tOZ1eWHXe--Z6A7YpyAcr~rGOQ4EMDpDdHUSH1znNVHF-XSCZj04QU558L~4lN233R11CjD8WwnbYlm~7nJzaQNQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/10393/backdrop/vertical/600.jpg?Expires=1769151866&Signature=dS727zhyMMdOyVypYu6v0RDf3HD8AZKrRjazX8KlYp8s67ssoUu7V3wa~DkE7sU8J2mjojUzM2lvJGu0vNnxo1QtnNd0RoH654ikJSDdIIheCXCPBqeRh1jZbD9iTzW0IHrGKE4ETOCcswQbDjhEXkTw0L7asPjQKp-MjVvxL6SR9zyMQsjED-4T0O2jX~3GKpoiOEqwPAKFr21ijHjFldZyMBb4T4bqJf1eO---KZFUFl49AHV6FRntgrvBug3j~yNY2zHwkMVOvxO36Y7SOjRclq9AKz5Zjs5rN6dKsh9hlgkmOydVYD0gkJfKbDzQeSDxzrjHDCgdlmrlsqW~sg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/10393/backdrop/vertical/720.jpg?Expires=1769151866&Signature=TCv9Ie3YzfjQBX~Gh32Xle782ano2TPm26O6I-VFNn6F9M9vELlnrv1QlRW9L4T4XpIioub98Benpu~SnbLHq2bu1y7HOEM8m0T7DGH9l1BSLE7qoxzIFPu--YF5AMVD8pl6wiobyUZu0AS~q4M3Wc4TS8CI1Wevw5NOz0LqbJK~dgbuFhQORkuW2RXcCoq3VOFb1vFug6DbwUXdQdfEzdLys3iyTMoOMO3~NUta-8q8YZcix42FMQbYBNoHFRJ-mVSF2z2R56Hpb8-7ii4E7kHw3X5bALljw~7cPmpEymx4L6kjBnsXFcXtUd1A1nY~zpISRUCXhcdOl4ke2LMuCQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/10393/backdrop/horizontal/360.jpg?Expires=1769151872&Signature=RtZPlGGBONl91KkUHUXf2dbhoIkWQC3dIrNJpVBT871TYnmzFRDO~34ja699KQEz4yy5uWfVxYbvPTJQZNQsXrbdr2iWMgMKOtt1njEviXJQflfq9ybjTsLWTIl2bt9IuY~j5mNOpxtC4wE7dSzV5000dwyZPHiOoEy28gEQawbGsTy2lwKK7NsaBH~tbbn4x0TvckCgkeCeO1YQzoVeDhKiXLUWekV6-34HxznhWxvmRB8iFJYfcd8u1BspTFG6iVKJyzml~ZQ564TG~bz7M9DZXC~-iIa9dt6OcXFV--3pYw~FcFoY4gcZZ-syj7Kgfr2IBrfghZcSrsuASosCTw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/10393/backdrop/horizontal/480.jpg?Expires=1769151872&Signature=PDNOh2kwdHyaY92bL0yDtKz6xXz0TjKvXkCaeEA1fY-W7kaDZ6gFkQ79OP1kWKna-IpStR0BHrr3lJR6098dUCh1Y3xLI31iKcsnHU8LRxgqiH8m62-7UNJhPOsWSLrY2cARMFPTWU-NcnxIuS4imYl~MKI07T~9Tk0OvvUn46JprsbBu~69VRMNygtNohDe5ZC02zZmw3WAchmIQtY1M6nNyuP7iXJ9bgeD4c0Sfytuv7jKhOtiTJxMSpgnZr3rq-7t-yqwIjYgrZPmhQH~Q00e3imnC-Yqusx~0gooGlI3fBVMTcXbCSMlXGYDXNLu3dJpqusyaqhy1pgSq96vDQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/10393/backdrop/horizontal/720.jpg?Expires=1769151872&Signature=JwbKN5ZflPFMQzjqj~OSamv3kiZouvOD-bf2bgNjCQlTe7h~lWYxxO1SsrQyoVSXaEUCspSxW2I2TR2MDRu0eMc4g4K9bEzzLVyTuzdDQg-bgCFDZMjenrweYXa33~ujOXlO5dVB5cIqERsGV4l8Pu55ukXjBUTVbmyY6wwnjt2g4Blepm-sapm8AKN~pn1F0crqbsNqxNVz4KlLyDqnG3nGJhBcLIufMmBQCuwcN28-0OmEdIUBY41bOeLslk5lPzeSXCiENznGzEqiIztTF1XnZxWcP7DFZwjCYKL2~9j5Dcg3~iDPpRPuBAckxnZoz4zUJVhaVwAvwRde3kUsvg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/10393/backdrop/horizontal/1080.jpg?Expires=1769151872&Signature=PuekDY6RmCNBVyF0ksc9pTpByvaPOaMCU~r5suMItLFbF-J1tSM-zD7CD49nnCT3CF2y8PiHGOZIQOZsXDvqPyNFhN7TKFQj78HLHRAcM6Xl2fSjCwCkeWMUXuoIgM1x1pXFNXT5TsBgZO6B9vYKc-xver4NXGeFyyYlMmQe4LegKedfbK3WY5sUpZjL84tS1J84~VehsAOCdm8V4~qVZcU0U6EUnepvVrc4mtQJWWV6pXfEnY754zbnBeSEbMrrGkVNb8IvnIYsmN5e~D1RTdNY5Nt~BNplyC8TFMNZt3d0vmOU-Gs8HAIq-s8UjfANiQWujCAKQHu~giG56YLTzw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/10393/backdrop/horizontal/1440.jpg?Expires=1769151872&Signature=HEGKSSq7obC8BPQobrWMRbGDGDgVDh5VgkaYZ-LoO0Ee3nckSq4OB4iswzymKESuCA-PRIC4FDHI-cbi7chuZiEs7w7gHI-KmpUg1~UEfH6P9LRZ2WUBVmLLS37~P6MqBnhLkPEux0Kf9oa3oSufuQYMJH3fb~V5QaNEawSxLbbnRqUeVgm2O5sTrnXfHReSAz7AmPkMnWP1LfVUQjSHJNNaSqE9dZzi4ijj7j~WT6JFflV~6cmny~AVEdRPosCojPq6EjL7kYHLMYRk5TYunob2McGmKE1rW~TpdTbWdXjSFp69f6~VdSA~hYWnXr5OTJgl1oBcdSuOke5n9iLtZg__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://tv.apple.com/us/movie/batman/umc.cmc.49ment6wl42nyxcyxge1p9xv7",
          quality: "hd",
          audios: [
            {
              language: "eng",
              region: "USA",
            },
            {
              language: "fra",
              region: "FRA",
            },
            {
              language: "spa",
              region: "419",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "ara",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ces",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "dan",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "deu",
                region: "DEU",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ell",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "eng",
                region: "USA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fin",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fra",
                region: "FRA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "heb",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "hrv",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "hun",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "isl",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ita",
                region: "ITA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "jpn",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "nld",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "nor",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "pol",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "por",
                region: "BRA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "por",
                region: "PRT",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "rus",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
                region: "419",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
                region: "ESP",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "swe",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "tur",
              },
            },
          ],
          price: {
            amount: "9.99",
            currency: "USD",
            formatted: "9.99 USD",
          },
          expiresSoon: false,
          availableSince: 1654468501,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://www.amazon.com/gp/video/detail/B000N52WKS/ref=atv_dp",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          price: {
            amount: "3.79",
            currency: "USD",
            formatted: "3.79 USD",
          },
          expiresSoon: false,
          availableSince: 1689983324,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B000N52WKS/ref=atv_dp",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          price: {
            amount: "9.99",
            currency: "USD",
            formatted: "9.99 USD",
          },
          expiresSoon: false,
          availableSince: 1689983324,
        },
      ],
    },
  },
  {
    itemType: "show",
    showType: "movie",
    id: "55130",
    imdbId: "tt0035665",
    tmdbId: "movie/125249",
    title: "Batman",
    overview:
      "After the Pearl Harbor attack, a pair of costumed secret agents are tasked with foiling a Japanese spy’s plan to mind-control American scientists.",
    releaseYear: 1943,
    originalTitle: "Batman",
    genres: [
      {
        id: "action",
        name: "Action",
      },
      {
        id: "crime",
        name: "Crime",
      },
      {
        id: "family",
        name: "Family",
      },
    ],
    directors: ["Lambert Hillyer"],
    cast: [
      "Lewis Wilson",
      "Douglas Croft",
      "J. Carrol Naish",
      "Shirley Patterson",
      "William Austin",
      "Knox Manning",
      "Frank Austin",
    ],
    rating: 56,
    runtime: 215,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/55130/poster/vertical/en/240.jpg?Expires=1769165258&Signature=dFSBNj7DiRSn7TTRtLD9vRRQmhznWyjbRWabqQte983UcmC5eFhycPqhlVVSTGZh5i0pjUky~6UZuVH3no-ZwgBIwQkV2EAcvhk022QGC0hQrHtaGKfJdhRVjNBrmXg7f06Kt6YRx471PPBxSC5O-N~tahStzUtX-gHcfhCi00a0qOvVfhv5urPMDk38J86wqN0GcqsHZa264FHRlB4-UYEKn7d7Wr27ey0sSdZ2VifwTz6mtpKPoyDS4D149SgMBdJ2hRWtMc1bYAu6QP3Ci5PwgTDmZvfrPEZoQQS16XgHlq0WcHNqet1HcEbeNEMpNmQYzpudcDhiniKlfyih7A__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/55130/poster/vertical/en/360.jpg?Expires=1769165258&Signature=amixJTOP2w43DCSLqqHoaNt-FsU5nvCFMUXmVhZlVOjANxBlTA1ox8WMcIaJI0eSNKyuJ9j40ha8PGWquuMyVmjGHqwqGCLe2AvxdQndvMK5IWisIYtC6LWbM6iLuBGlm4liODwkVnesp8TkAkO3tMzbYHA6Tl5HR0bA~lF8TJZgTKdf7ion6PHUoiV7Xah9I6rvuDWXE49sR8y7-JjmS07o3AAmzcIMKXtYkCvsseV-hU4-5fkN~GzKMfXDHUnNWQtqOPgIYmOnXH0lz5nCewbevgCbI6u7uWtHpedK8xdt5wFGjn6O4C9e2JCFdoNYRQLBRiSy53tNGPdSLoCRaA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/55130/poster/vertical/en/480.jpg?Expires=1769165258&Signature=IftKv7IqpA4FbJvqDIfjTGYAEFRJc~yQP29a5QZFDKdGvIPPBviT5SIbz8yKSdgHhPcO2cNWl1LB9qsiKv3IDiMiXNjNV~VsBPlmwRd~6RHAuxsOBHJqb5RDyktyifzwHaM7~vxJr9m0jZstDURIFIQMk~CerPzntE~4qKka1h3qbUQILp8KFzZBEwJvzk8xUI8Fax-5TsB7~mdWJcE~XqLcXodScWpHW82uIgDPssgC06a6nqRq1i4Rg8FdbxPIU7B0Ogf6JpggJRc0pWTwfrQckZC6I7Wqez5HZi0iIV84m-D2Ac4VwTzGh8xb-LM49p62jNtGox9MNBPincwAVA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/55130/poster/vertical/en/600.jpg?Expires=1769165258&Signature=CZJk14YDcCWtLw9b1c67eBK6m271c6lrfd-~gaZC9biY-VycVHuGVhqoLOc5oVfgLJz5GzYIOGKv8sadtDqUI3DbGrt2lT0UfMWZQ0W05a8siSEzP-A9N8gPYuDc4TKxzpiqjTItkAlgoJkYuLxqy3u2g1ynMbAVIeMkuqm2ESieVKSoaGCvDy~Qyod4Ffp08CLKftkw26jGfwrIdSWcAdGDusQn2oljK1JO82H6ySz1xHed3vJQRd7gOj9bxd7ojzjIK0JWWcluj0ouwvVSJEuN523U3HIJe7w-HPLyUW66SyEkzQRaRwXfaAxxhq9X-w4QlDeL~AbUUEQj8213cw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/55130/poster/vertical/en/720.jpg?Expires=1769165258&Signature=ggYc04s401uDzv717BjWdody-buVRdb0tWBBMAYKRkGhEHM9rpizikxlmiEOfz1BzRNf1Z7C9CxiZhRjLpkqBe2d-lkB3v1u5kMer4MZIgv990eLHHtIqz3euOJWsjAtk-UIfxFT8hZkEzaqM1I5q1vI0z95GbFRwhuZss1IKuIvw4TyB7lV6YPZuGg2R8UXDVp39qCYeQ834Q9CASwpc49KN9oEwtVetXWZQ78JWCybKbeStgGY2FLZfvnGNRE335QDtX-HL0qcbB5Qt3rpx~80SkgA9Ew69hEiXhYF~rtymqbBnPAyj-Y1YBT-v5W92nhtNEUWvnASkjPHzU73iA__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/55130/poster/horizontal/en/360.jpg?Expires=1769165259&Signature=Fec0PdYcw7z9EIdMqavWAZzMRJ2MglSYXS6wG0-3r6ER0Qlt5czq8cY3gAdocaRfXdIkvlMdmmGbJ~e-7ygDBGr29-RNrIGer6fqVRUFpmwmXsEDp51IeMUubsNuv3LN9a5lZw7rZjGDVYdVtyTgzJk5oseYZRQycAULcD0qh2L8dZ~QPL-NLX8ds3rDZsP7SiiVhIiuZFvE-i~LiaZKF2ogpp4HB5A7JVeki5VkGB~Omb-zrENUjytypE9sY8awW-ue-Ba7yKrDbp5xeAf4g0mOt3wqGUO2t6gxO2UulNCstoRymWlrAXVvRgrIXH1vvQ3kBR5Foxyi3Dj71gIqCg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/55130/poster/horizontal/en/480.jpg?Expires=1769165259&Signature=KUtt7m-XIH~hPt-ArFh2-SfN~i-uNYmNkD5PghnMM4IaMIDYqBXpPfTqZQG05EcYBH1vBE1JajYWI6-e-4qNMv0Z~5jr5GKsjgV-CQWUr4MpnABvTquYHrBRUAa4yzVgc8sNYLBC1FmbwINW70alIIJVH0CIUAediNW9PtQmpwQFtrFbuDMe2roAqKgc--vW2nBFP6jgY8TPU6mK6FvNT87y2bp-cJj2ZIN73CMjFKF9rJ9QB9ajBuHdAibTvZExVtDWlh0YpTisLqxFc9j5HCSU5ENfEVCduHYebZPzHJdIafbxCp69oaw49p7zSmc8edabBGOSnxLTBZXHLxaVYg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/55130/poster/horizontal/en/720.jpg?Expires=1769165259&Signature=lc4CMvwtQZzxqFPOazPo4Ra8tGkDJywL6Myq7S9oVYRvqsVRwiT~lUpdUpxKBH9pnclKRfXIahRbZMubXDJIRguPkr13kII4aOphxy7tQeRsnWIvYOz~tKlTChhbrb2Pcz-4QIu04W3Da-693kGM0z0hCPm79R9PNofbqqOnzPwLhCueeAfKv30mzgCp1XC8zywWJ30bSevAarZw43HhG-1bIADJSYSmQ1wg~chatczA~RWrpnDVz9UREwt58KErZ04O6Kc5PKvGT0gn5FHqKPZqdXo1xwlQCsOjIMpt40aqpqotNp2gk-Cl58h-OcaGc4Wp4cfU0jmzmuYek84b6g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/55130/poster/horizontal/en/1080.jpg?Expires=1769165259&Signature=QcJbbDTAEauGkLCHfhWesr5HGTgMVVu9tmEPGR1ipVjj72jKDLbuaSlH4M8OxfUJ4Fklhf2oZbYXl~iBK5hWt0hu9N4zbo0t6JGscy141JmE1FySVd7zse~2HssIt2DmhgnYnMVdqcJatJIch5l3iE~emvwVewX-Qou94MIrJC2cb~T1He3yyZ806clQ9WJeMwdSjcR24AGryRMHwthpzVaNAdLXC6zEBok4C9X2Z-n1YKF9wHW9x0oZHjBKevQM4CkRWFUxsi80oDQTTBvUlJOU~M8XPzBaT1WjXV7OUWPe3IR1wLNVtC9KsAOQMYvWLQa8RIj0RoNBz5ooMulaMg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/55130/poster/horizontal/en/1440.jpg?Expires=1769165259&Signature=cIlLJoALM9El5FjGn4dbhDA20DAKEtbe2VvKXyg1~ES04An-9tOe6AECkNpwepvL8NYmnYQ644mEA7AV68wFh-GptPofZtwdkHB7H~ikRdEzpZ6jri1MjiHhUqTfh7dJaTjquM5tQVjSHPoa632nNvyx8OdKIlHuC8UK-IuRV1Nr1~bSMKF9tEi-BJwBcEwA0p1-hQLCcgCkm9fwp-lndce6pGlcMeo4IfodNFQbsMZhRS6UINtQg2zJW5yHDGZcmqhAFZQj0vQvZtwmNnsb2AW8iZFiv5q3QwEHwQNxhN1oU4ZRKj02Cn~IoiNBGKipuG1-zLDj-Fws6s5vibYVuQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      verticalBackdrop: {
        w240: "https://cdn.movieofthenight.com/show/55130/backdrop/vertical/240.jpg?Expires=1769165254&Signature=FWJFVElAdfQk2xJ3cWzjweJwx0vaZBYskS7dVkMLRggrON4LxaKP~pc~4wWVE0bK0M7iMS~-uhjOnqt8-fiYmt239gyL5Mcz~nHAzXEGGlja3QuN-8hjEPdiYBPOIQJvbvcfxODai4F2TkaHIks5xw5HVVcUlcErTmrIPB~5sIQIIAccOpmfNd68V7gNpb-bC7znCv-9A1zNPoHFl-lHr-Bhn-7g0wCkgQGAosehmHJZWIL~uPLYBkTHR-NXFjnJx4ob-gIwm8xsKxxftM67f0gYecHqHgdsab--Mo7Q~xs4zf2SjeV2CBoa85kqGHSI-xTKR4cvPydPm8QN04dtrQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/55130/backdrop/vertical/360.jpg?Expires=1769165254&Signature=iL63S3AXHyacCueBBOLc-5avUjPozVELCHUBxnmzyHvxgN899BXCcZ3draQObNma6-hgw9xlspkozUXgZJw4tKXAu9H2Wa3giM-nh5P3VvdCtzaHeSvSbQC3JdAeoa92fhCias3rjPZ2hWKLK-3Vhp33HJHh7l-SCdHAhMimOxZ0n472JzUMOsb9cE8b29FDbmCTaTSGo5Vmujd4gzMjBOebX9HGOMxTMB6OxQP5ORTP9YLPoHez3mJ352izGE4fK6FgGcQnvctj7-FURQ1JVqNbRWT~oLqgJ22w2cul2eBdoOfZBCe33aDJh6rmxaZhHjS~~L4yLlZlQuZ51OFWrQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/55130/backdrop/vertical/480.jpg?Expires=1769165254&Signature=JiH5QHwFsJ9UNi7I3MqE~4qS-cFRqR3ZKbx2OrdzZYwYPViAMvOWwkUUgxM0rTfyxwIK-VSdMJXqklZHOYEb3eGYNW7QNmVgv72WXAlXxHfsUDaDc~xEOa1OJ2TMpDp9PtcN53EPgf~Tvd~PU4tWqBbxUhae2VOqQCs~m6uknUhScAYczZAxcSn7n05khxKxJMHV42isZfEvo23t3B26U7N4niFSGqBrp0fr9aWHCts6pnicF6Kic1w8DkuIF1e~~drkFz44mcpKs2TrXtaezwouyiSHfANHqRF4b79YkNMFFjpAj2ccM~MUi3xUyToWOA2bue515FRxx3xypAGqnw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/55130/backdrop/vertical/600.jpg?Expires=1769165254&Signature=fzUIK5Hzi2RC~9982YXhlUdoKxs4ydH6ydYtA2-OkdBqbHb0O6ZMYDN6YZJp5TdeM3ufXZz63C8ffnEIciyZ-vyNEAMmBmgxhMwfCtBpadKhfuPaCEtxp3ROm5rUCZOykNj61N689sWAk2psPKlWIzpTIGKdonow-u9Garuatm9Oq0yhW6R1aLPlBZ8f2YVAdBeyvu8H3-M61snLam0Pi3uzYYMT6Ux9P4F8LazaC9wjiEHQDRX5fmHj0-ZKNoP7AtXrIcSou5czVyLVX9z0L-HrOLs39mUAYmO~VNE~pXJ8bW1NekBMkpln-QfDylHxE~d3~b08eAWcnc8uGMLk~g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/55130/backdrop/vertical/720.jpg?Expires=1769165254&Signature=YHQ4gzphvhXutRd~juXl8SLu~egjAmovbmClQYmcAvNzJQ9wJ8vYxrbbLebyl55fontoJsWAW-xVUG-AIj3mjHt3DodLKPjuzS08Zgw0L-uQpUHuTOsbvK6gVjuJvunn-KzSBU1KMOfmd11PpJ0eaDVO0GfG5Q0v-RbmpqsPYF0lUKtK3z1RGFopRPavZ6rkzqCEemXiiIlm~nkfedCPW2j30rXhgHO0skf0qEVSFYtqty-VGZmIsf9cLnywo7X7V1L9kU4k4xAEviRWsbvptVFdvDUBqutLzFknSACP32IUIcE71Nlrp7u7mjFeOrDI3WHmlw4gF1dWdfOKqwQAZg__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/55130/backdrop/horizontal/360.jpg?Expires=1769165257&Signature=QsprAPWDJ1xNBB72io1RncBgQ7rGcjj0AhUrrTEQA9ijixu1mGpC7eBIc7N3xNVBQgob8Q~0R0LHe53IOqUAAw2BBm9~jLk43DoyrGazPhW3ozLi~~~gDhVPOcCzCaxhj4QWHsrvrQCMdA3UpKypBbzpQsrY09s9bYVJaAWMz8DudY4alq7YhuGd2sr0SH0elFwgLFEfPxRrT2weZXWkzDvbmwguiADbvzphNqf1CVmej0RRdMZ6Itwlo8ZeGy17UHpXWHgSZV65A0WmcdiW0mXWIGEE8xz2wAl5S5zReNk~GN2ykwjp-Rtk6KuMRxK8uK2ehyLw3V37kFQjZkFz5A__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/55130/backdrop/horizontal/480.jpg?Expires=1769165257&Signature=jwKaNyr2k208PUnFPQX-n83iNelwVO~6MTHKttYcrwMti0SpTpePxmF1opk5qL44P2SeOleXgii0MDr~9mBdSrXoKJmnX4h3Nc1GZmFvnhOsJLW7-o2QtY3gfY1urekW2Yt30AJ87L5EPzgnXQgRdXzWOBD2vNsMX0ZKmiGTFlc0ixN1lpbZP82~9VoTQEIYXLDjhe8PjQjSNWQjlN6W-q8Dh68DEWxEhO1A5qwA9l2JyRINooa~Yf~B7rkCOeUGp20XgCAbBBiGm~jPuo7PZxxF7033ud1~ERBAldoh~BD3qfPsdNzgntsafsVRZkE-5B2mCk9Q3wuQZDrOmrwmBw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/55130/backdrop/horizontal/720.jpg?Expires=1769165257&Signature=Hd9U-qnT8Au1DJECUdBXWOCVtGS47ubAbenHcAmgncp7eYPjSiCwk3kbNVkkkZXiNFbgSYcR6cZRtDCfBlQ57YmGGW5wEiGqynB8WunThKqturLdk0hELNtfOSpPqh7fnr6eAczKYTC1XUbU7Ksw1CtLWkacnwupee5s4kDg3sx-2XaxJMRf1nPigtMaMXSq~r08-x02mrTfX~DIV816m9jV5WbrKKvAZOIKURrJue4HzSsfT3zkFPKiWQfMdP3fCsZ-~SB8QAsvgNENWGnAw9iAWNaGxBZusgXAY5IhK8uKViFn0PQG67Ivt5ITdYUECVlh0DTsPe3MfVGmu1NSMg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/55130/backdrop/horizontal/1080.jpg?Expires=1769165257&Signature=kqyLxqEdvgMVD4YNwD9nQjcOB1au2vDeuaY3azJzD00TK1WqapzM~TlGOTfFSlI-IsjTo~-ZXb~7AioRPf9ZnceNtjUGeQuaJhQnXS287wolxI~f44GJAhBnVfzmmRbEIB2pB51XIDB2dxe513npV9nOhGWVN7B6Ot0tPJ33OTVVKu55matpaRlJpZe5YUG3hBPKi4~mStmGuNjx4WKrklsS~8pLTH3c708gA31Wog~nAJX3ofWOnsTK2E5KutsXayO1K2koWW1vzBxoQtpWyAvWB97DTZr4En8e62d0AIX-84N-Ds-6bquNmi0YxFs2m9~FIz4gui7MF-zqLqMl~Q__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/55130/backdrop/horizontal/1440.jpg?Expires=1769165257&Signature=Px3BS~BlPEq~Ja~34By9uc8wYdJbZ4gWc1WecCEum6k8wa-GXxIk~oIKf5iURvPclrBHE7of1AVfAlUaX1boCmm38EVU0dhaGZDmlkwOeOcGmdFdFew2xXWlFsZiuk7LGlUJwITTpgj-wk3PTaMu4QtikYeFn-5JL3DAoqLtcpXEBe82TXZWGrVwUo~783eZIfM3DVyXoZ9V4pbz5Rd-M-QoqK72wvco~0k-bxtbPQE4Bcps9FOMcFhJ6fsUlHYgS6-cCCGbuoPzaPtQdyXq8aofpCYFCYj4C2dMj2zt7ImJ9w19TjHfpsloHD4G~FFAtNnKum24HAhPRpEJgclJrA__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "tvs.sbd.13160",
            name: "Tubi TV",
            homePage: "https://tv.apple.com/us/channel/tubi-tv/tvs.sbd.13160",
            themeColorCode: "#10141F",
            imageSet: {
              lightThemeImage: "",
              darkThemeImage: "",
              whiteImage: "",
            },
          },
          link: "https://tv.apple.com/us/movie/batman/umc.cmc.4mqmwjukbnbk6jwxszl9395k2",
          audios: [],
          subtitles: [],
          expiresSoon: false,
          availableSince: 1701584903,
        },
        {
          service: {
            id: "tubi",
            name: "Tubi",
            homePage: "https://tubitv.com/",
            themeColorCode: "#ffff13",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/tubi/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/tubi/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/tubi/logo-white.svg",
            },
          },
          type: "free",
          link: "https://tubitv.com/movies/636895/batman",
          quality: "sd",
          audios: [],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: false,
          expiresOn: 1919807999,
          availableSince: 1716073828,
        },
      ],
    },
  },
  {
    itemType: "show",
    showType: "movie",
    id: "88",
    imdbId: "tt1345836",
    tmdbId: "movie/49026",
    title: "The Dark Knight Rises",
    overview:
      "Warner Bros. Pictures' and Legendary Pictures' \"The Dark Knight Rises\" is the epic conclusion to filmmaker Christopher Nolan's Dark Knight trilogy. It has been eight years since Batman vanished into the night, turning, in that instant, from hero to fugitive.",
    releaseYear: 2012,
    originalTitle: "The Dark Knight Rises",
    genres: [
      {
        id: "action",
        name: "Action",
      },
      {
        id: "drama",
        name: "Drama",
      },
      {
        id: "thriller",
        name: "Thriller",
      },
    ],
    directors: ["Christopher Nolan"],
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
    ],
    rating: 81,
    runtime: 164,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/88/poster/vertical/en/240.jpg?Expires=1769132254&Signature=XG2Lbrkrcd~GQCuUt~QH~7qiECIcb9EuF3ksOa6gNkqKUUxj3c7r2jCVQgXyPKNZ6td0lxgQbMNsJ2sWZ41lnrjV9Odv19t7wUa9y8AXWT59dbmGdIZBgx4t0G0EEkV3lSANlHWyiV9x-zmD2nhU5mbu~18BUQZHQhbG4sWLlzCjGdZyCuRZ8VQ-tRWoVf7KaEWZdi~XHBHiY4HUvFJRnu3LvUxT60VQSsRRJ~cxVNvM~Z6JKb2KuXbyhyffscGED49qyFIMbWgScj~9MPd8WI7396vFIVv6Wti0M3WmnmODOPzyNeV8eXd08ZeLKJpqSLFcpAFDYGRwCFWL5OmkNQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/88/poster/vertical/en/360.jpg?Expires=1769132254&Signature=RUFmGv2oEZNfK8QOkXJdiX8w2qrAJ6oDX7E7YeSY~T9pLrUttpLQGU5XNrfJ0BoPtCGLP2FAaQEyFAmE0q1UWV9oWm4wihtq-ghHG4WH4Kw7gAn~U2vstMnUrJFm65xYUIENeNerGsQgIYWhnHKMeFqJaeh2CeG36VJYQWvlkRzhbW7eAICPc~pW2CLC3CoR6fl48mj9O6mCaQzXSZQjHMVt1RIIAXaksAUTsdQpI9WC5Ff~F~yH0RUNIipoL~arrVpzNGU7Cn5ZzpVrdeQ-izpf0om~PcIeoqfg1d1FAKalMbtrKcP8qFlBxou-9WyfubsEiDfmSY877~B2vNpDTA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/88/poster/vertical/en/480.jpg?Expires=1769132254&Signature=VzcKEwRj99dYCYpWBMonHRX2XvFF9aZdBaN672YR~zt5hJfTQT9CW5ZHbGET8lkIJt~rbJNE0mvMBb58dJgd43INhQmumG9DmeOhFkn5B~zsQdEATt5xFgju~2HlrxhMXBeCTtLmAZb5-QyF3mpSDhKynXj57Ojg856KEHQjTocssuAKowLE6278EieaumjyMpCnGsCVfJn4GLqWoveA1Alr7rGCdzohF-FSwPY-Z0R3BThUGp6B-Z5a6bv2vRGaX-8SyBDzO2nM64oXyz643iZj6m81YfxwE1EgaOQFhOMLpg0kGZ-xE-Ct~jrycHm97xwPE7RcXmLXtvi0hwWYTA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/88/poster/vertical/en/600.jpg?Expires=1769132254&Signature=MraQJ6qXyFpNPToB95bzveHpjJ1l3o9WDNKtBprm74yxdiF-iZlwgX4UUO4y2boezLpjVgLtG0ARA94Ug755wmKqufjzBPb8tZagTFKr~0504wvU-MH9Jx3JVTAxfMJVF8b96grf~-MJnvKDke7WbKdXv5OuNScd1KnC84KvNKsuwy3zX0KC8VScZOYvELYN0mCjWbnirdFuiFI4jDkuGy0u-BjNaz1NZ3I7G159m1W-MElV8x1K311Obfm8YovgVkA4~~iqQYVR4ZBOImdVi6sBs2KW983k49tikbgYGHrXdci57A846DGuuI7rKWzAZNPzriMGIXcorF5e3AqwQg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/88/poster/vertical/en/720.jpg?Expires=1769132254&Signature=k8GwwG2e0T17ZDkLQai8pufReLUUrwksUwv-NS8TKJ-T8HgjNQk9dlWNFPtSFk66JD4hr6DOJxn5OITiOGL~X6u6wAD4pdmCcikI-PRPrpOh4RxKS2JNuO0kBVvYqNljDBK7zZ~J75yJMecMZO3E2UAzmbkbYcvB4q6z7N4Sv8ri9MW7dWn0zGmDElNbMwLRn49w3AIkl~FN8pOPC6lU98KlXPwxPFAwyjuviyLApQnF2mewJYvyd94lSCHpav0t3IDfqRfLoOs8q-tDXB4N0KwZaqV6fGo5yIfdMiCKr-qTCmzXZ3vHxwFlxhpaS0peI5tHxliY-SzKAcpGEe8Eww__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/88/poster/horizontal/en/360.jpg?Expires=1769132261&Signature=LjLeMDO-QU19y61skvxJNH8QKT~XqalzayGLObh~lKvDIxv6ZnAxhEuNDFZKZAlE0sAyYaXS-8DUc-6SccwKbiQSIivkE9ymmPncuG6fLVOS3cQiyhX~4WCMO0-kWq64sd9WGRxNQEw030w8J5sGjiPajMd2l408W4s0aZfkJyIAho0SB9RFI82jcPCgvjOE5qHhjurrlxiayd5EsAqWHfmiyy-huAZ~lHHOGRecvhxiwWJ4uORRKmYuDIqkJBq86KicmSYtEYlXsAppWq9VH0LIdtz5liH4EOpNvOQFInwYO4a2W2uS1q6oArodgFigtyOprGqCG~FjThWpGtjYBg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/88/poster/horizontal/en/480.jpg?Expires=1769132261&Signature=iETOI9vwKJghCqQMAHjmnaiVVUKcsl~dm6CssrKfYPoGazE1f7GU3mSAk5lVbf8ou0hdIeWPLcJ6smXgNiebKFkoBXhRA6LO~Q~keS3JWRIidHnszU5p-EQConpvr3GkmCGs4D2AnJtw6vTsEcQRKusPonUFLZSozGI0Uz2hhi119wFsa2OPiLzg-tp0OB31ulKHMFA5W4KCEHNO8XnufoeM5tXnAMCWUH8cwfZRIELl2h2qMUgWG267v10rrkekrlQgIpgGVeHTTt3gZQnP35nhR-5K5L1zlNYQiDy5bS653Rq4P1HfbKaGY0ctqQGoiOJRvuhFb0Z1t7uwuwVg~g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/88/poster/horizontal/en/720.jpg?Expires=1769132261&Signature=HAlhlPULNhEXQP5pzIkNfko-eFrcfCrYCeZFqzgnUHtccGi2yVvzQnhhiZqNb3exT1DYAB6R4ROMYP~aEwl61Z3xpx5yVQa8dLWz06SbNsa94Y62OMye7UZZOf0QJWeQ3Fd5BbiBEFhRSpfi9EaeK8C9tAh6kQlLRJ6dZ4c2Lww5FsKuh2n5MdVCr737NFjkX9zmABgqxbAhRAzbJqw1t1JKF2oCzQeW3I6NAqLMqHbHX3zivL4Z3UXwy5Wb~kbouLO7G7Tam7lDe6zK2-1QdRu8X3aldUI6ykq4BRwYFxZ5mJXuz~RsPMLors0j~rmWV2CsftUU3mbDVEQpiH-ojQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/88/poster/horizontal/en/1080.jpg?Expires=1769132261&Signature=WRNRnogPkL711sfaqE5lpsbWeFLW-MyRLpV9GRtB2UMEcuuXXgeMFEe5XKXQXF8dkaKtPo8rqYVJN5lwAVSOjpq5Q7rdEqWrWfNZQ4f8MA-mtMlXCFvY22eneeo9kSyxL40ILP4f4YNFGGeYWNfUZZqJd-7nuO-RSCuwbuopo-4-7CM8TWCLWuihT0ukuY1OkVFPQvxVUgq-3QTimJHr63ulVKCcrttwrd7P~gXqBszWs-VGqSCtfrm8OSyiPWEgCvi3WtRmE6DuqCPx-OKbJO8WZLs4k-UvZFfPgbT1AdL2J2p32XXu3MILgB40aG8Wu0Jhcu2zyZT3MnPShbWFVg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/88/poster/horizontal/en/1440.jpg?Expires=1769132261&Signature=hjoRmfDTwgaQLllnZ-iB17ANWwnogl20H0Ao8tgm-AlAlIuEY3NA~5oAWqW7fU1ZhwoxtqAOMxcz1IItZ1Qk~OYF6x5f2AcO1pMjkQa947oMFl~Hlgffut56Dcyarg8zcpUmzeRcewCrI3sQoOcai7~Pd8xBFNDe3dFv~y3iTiJMfJGorFeFPfU87m6Ks9yCpGDpuVtQ-2RtCYEfgkh~qLi-Znk2cXi9aO84UxHiYb9IK3NcnsDV5twJungsNVvNl0gZl8izYGjEIehtQERMOo0PQA-rzN9AgGD7k1cRaPFPJInDnpckQy4wGeocoPeFpe84rNq7JDNAIMP5TLScPw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      verticalBackdrop: {
        w240: "https://cdn.movieofthenight.com/show/88/backdrop/vertical/240.jpg?Expires=1769132246&Signature=QkNOf7TA9KeKMJC5wDRxTL74GisUoVoCBgJJxs9XdeL5rbiaDvTn5VO7waOlnrZe~cmKf-xertWaW-srpm99kcGGifg0G29lyQ7Nd13ml82OSKBTdcRV~hWbZ8gP4~X4xaWXPaqj3FcP6lL7CWVL~yko8GFD64jxwpK1lvprptrhavwpQZHBbkEITNdiyO3PEhnNMqtxz9RtogpkXZqtXi8TF-o-FifLics95M2sG8iHOsBn8VDrb65z7EBaFfHz020CU7ONpc2RA6TPAPfqXvwJKBdkHl6hadQAvvsQDV0WoAGXxHPpSuHPElecoanZ57HaOfWZj1BGYfIe5-5bVg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/88/backdrop/vertical/360.jpg?Expires=1769132246&Signature=d-0KowOvhSakXYc6~tNwfXin-1QUF1YMlqkElsTdWgyMkQcPrTilzzG30SFmOTWZDxUG3CHJMFe3x78ADSXn06Wrc16qRApgs5trvFygKlvEcEJL6I04RiYjluCo3DXsPdN~HKcm~zMfgAii-vRMrQvVsqGmOVi3IvlZqro7f3-tRyj~UqXC4pJDpjAzBZU0GjxG7tV4DiTTJ6hVou2DQ~D5yTxbGl7ivHGWJpKrQvHcHfxFpMs9UZ4t1S0JP3J3GJPhfmK45B3Pii1qhd-0hQe6Jp155hmEXOmA8yoJcC7iGLhWsR80By~bw0h4ERxZPQ~XM4hq9-NXS6ky7PmpoQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/88/backdrop/vertical/480.jpg?Expires=1769132246&Signature=DMapc9dNL4CielhyVWKCVkfPVkhH5dIwt9QCpMjddBqJblA1vgU0Z0BJ9vWCYN19fo8whiTRDn6bpcET6w5vxwIE--oROKI9lSVgOczRfGZ9o8iYAv7JXC4Aqj4Fe94zQRJjOrLj7P4ZcWveISvrpY0nSc5K-yjvgjlyWQ-USntGeCCCZ1ahL0pF8FYNqPxtiI5kIwIOHV817Worl6Zn3CZhdKZJW7YQrZsYgoN-a3DEo4skNqIypvFlWTPSaNvpPPqIr5H8Vf8b6o1ewc0hnCROtHen~sgyCkcBYrCg7iPUtxThCdOjhByOGU-Q3p7dnuAiIDkS83mkMJ44WTgSmw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/88/backdrop/vertical/600.jpg?Expires=1769132246&Signature=CKLAvQQI3z1V8hSXDhxfJZ4NLMsJEFW2v3DAqex4v6HmFWc9578-16glR0jcmRuM2D8Yxx~PJnVCMq7wgsT0ooYuLw2M~4l4r1~dlFYwBXlHaqxHKLXHNGcHXJCBvPwY4wL5QlTSru5a91PfXeZuUfQAZgajVDhAmE6WDf1TlNfgxHmXC6-hebi4CJkGsgZYeeXaKb4BlsEJZSu5DnJ-B1wAP-Dw5xdFIqBlKYcjGPZ~EyJP8MGPYo7RHg6ZzBG4OSUZqzFrZuMYF0dE1qiSm0JtH49qGKP6W~GUMmNAJW1wKR5ue1JUqUT91dMUbSFvHby0Rf9-ELp56MX-NP8toA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/88/backdrop/vertical/720.jpg?Expires=1769132246&Signature=UyeIJ10WCdPQEgz~X9Z6UwnKtpJNRPzlWyIu8LLgX5xl98NjR~B6nFniuy-d23RXEyZk4VqD~5QGtHst9-3o0oeRxWqqP9vS9PAof972fmn~5RPq3MP7OdrFtm8XpteHuV-Ku92pvjIyXzMDl~3l3H9A4uYRQLfdegVXFKfQxYhRCugDtLdwr5VCmDdKeUZ5a4DHxnVKjBZcRAyP3ydDbl~tTeFeKhMaEpxpnIh~IQLpzOZyOOVhWTOr7hgUrqeV9FO5C7lmvUcEaBX8MfaaQyK8psFX18s~sx4C-l9MY9pSU3aPjDHIrilnrs3yHrsMZUpyEaUHabzeTsCnQQok7A__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/88/backdrop/horizontal/360.jpg?Expires=1769132248&Signature=V3fl12VA0I6xe-s9f69ceyasxGCAIJuqqVzmGBPzumCpHd82k7ScVSvNp4WuBYErfdyI8VVb59EIgpQEm~RsL9wqtRxmshBhmFhtXoYRrqN7-7FihwTI2bAOIXtkKMm8ON8ekydnatBjJaTofFZi0drweCXM8XK4ihZblQAxnA3lycNpp1ublZqIGETd~u4~duHBcKNOIZ6qH3SjwHWv43GUpoK4K0e2LtwLZ5PpLn2WPnO1T2-MNx5QNjfm22REjaakeY0idZHbmk1DVZ5GaTC4BqHR3IDNW8LLk2JuwuMzmHm5pwcnqXpVXhJWmqzM9whv3imAeId6dxT1f69anQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/88/backdrop/horizontal/480.jpg?Expires=1769132248&Signature=TbUmTXqAI6kQD1EHyY1BFRYkJhHf6jyzAvW-rcXKZTuh1b0XWOfPUH1mgHUXQ9FESPvxqiA1UVNVF7KlftbRQrgD6q1eZ3t6teCPzpbeQXqh-A0obATXL5wNs606LkoznJdf9Qjf~ombQhpYTDChyfYGLLVXQDc28dgr6zEG0-sOPFFhSNnnoHlqDSW6lX07c3exBimUtMGcMrO2fIwVJ6zNW4ftTycOAb314HznOUizh3pMMtPM6NqJwIO2wA22wDZuSvpKRo5PORN4I3Nb~ZtQmBxhDVzW2effeli5xW9y~xsHQKAYaUwIMERsQgxE82-KO1ReIFVON7C~Y4Dppg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/88/backdrop/horizontal/720.jpg?Expires=1769132248&Signature=lZ37AEwT8lxxHlt2NLFgRzolN1~NPXgayvsAnzrB8Ag93IIYLcAE~NUwM7UOT-h5gw6QNRFYw32Qe69vaejJxIzU1ZuhzF12R5734sEI5DhtiAtNXQB8lFIL8jbfpEN-jR4CuoBPzAVe2Dm8rnfuvl3kSGIyGET6Mr8oaMhZ9HJ5SdJ9-yGWFTvb7-D-Yyaaw0-3b4pewrxUjgfPYy9L71LaQojXsTT2ezc4IR4adw8ukxbpefxttnQ4Cc-xYvW6nc83dGIM2hesmuua23o0hskPz~3z8emCeHuViFzbXGFB-coFi2L6WqZAFvHmdpKjH8rgcX-OMH7uq5EJA2yJnQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/88/backdrop/horizontal/1080.jpg?Expires=1769132248&Signature=Ls0mUoYeuthWXhKt2Mrc6azM9SAh71iFGX-pgRTlVHujbL46hc8WqpW-HplkoY0GPMmL4xvr4u9I2B4Q9VGdiyVKRIpSrNcSI7fJr8FuTDi0wch76frQsjLs9~YmPll3h4Sz4Q3GKyniXHlCPhlv-rMLo-7ggiR03Wrkyb-FB6i0ja1LiOz8XUg9yQk~3wAZLM5miyBLbSJCzbfLkNliIVkrthVckPNkjSfPLCMODyVzM5jmJaAm78~CAE7DoYI6PqCXfIOi5hg5VY29KyJde3ODD~lx4kWFjJ1J6JRxUmgPxw~z2f7KD7lx6TwWN04OLdbOVxsbUdGZhAROntuOrQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/88/backdrop/horizontal/1440.jpg?Expires=1769132248&Signature=e~a90G1GPrX9F5oqzQc~S3k9mLdBmqwszxjQ136ApNwlEqLNu-IswN57cHVFmpyViP2ojS~hgLnOtl~0c1XvroUaE1z6hpIqKyN4-DhJakGaUyIXX4bkE6hFcPTt~qGSecfPqPMXi9lfUSWvx~JXXProi9EeApqvHZ4x2Ou3D37xAseTlRdDq0zzFIt~sNEbxWiw2LiTcM90ZC7-5kporcegwBGZ4-3xnRHLEF9ZJV2fluB4R4VuAlJvb52QpDM4Ka5ACt3S9qD2E-JboxjLJfP1QIQt5E5wUmYctbLRRPl68MQ0oVxw5xmOfV-SusBwAcyS6khtRSN42agNNlLglA__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://tv.apple.com/us/movie/the-dark-knight-rises/umc.cmc.4chkhft26y3bhfxrtfjemtp2c",
          quality: "uhd",
          audios: [
            {
              language: "eng",
              region: "USA",
            },
            {
              language: "fra",
              region: "FRA",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "ces",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fra",
                region: "FRA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "jpn",
                region: "JPN",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "kor",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "pol",
              },
            },
          ],
          price: {
            amount: "3.99",
            currency: "USD",
            formatted: "3.99 USD",
          },
          expiresSoon: false,
          availableSince: 1653933348,
        },
        {
          service: {
            id: "netflix",
            name: "Netflix",
            homePage: "https://www.netflix.com/",
            themeColorCode: "#E50914",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/netflix/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://www.netflix.com/title/70213514/",
          audios: [],
          subtitles: [],
          expiresSoon: false,
          availableSince: 1693809900,
        },
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://tv.apple.com/us/movie/the-dark-knight-rises/umc.cmc.4chkhft26y3bhfxrtfjemtp2c",
          quality: "uhd",
          audios: [
            {
              language: "eng",
              region: "USA",
            },
            {
              language: "fra",
              region: "FRA",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "ces",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fra",
                region: "FRA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "jpn",
                region: "JPN",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "kor",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "pol",
              },
            },
          ],
          price: {
            amount: "7.99",
            currency: "USD",
            formatted: "7.99 USD",
          },
          expiresSoon: false,
          availableSince: 1653933348,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://www.amazon.com/gp/video/detail/B009LRE040/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "deu",
            },
            {
              language: "eng",
            },
            {
              language: "fra",
            },
            {
              language: "ita",
            },
            {
              language: "jpn",
            },
            {
              language: "por",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "dan",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "deu",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fin",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "fra",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "ita",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "nld",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "por",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "swe",
              },
            },
          ],
          price: {
            amount: "3.99",
            currency: "USD",
            formatted: "3.99 USD",
          },
          expiresSoon: false,
          availableSince: 1735063102,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://www.amazon.com/gp/video/detail/B009LRE040/ref=atv_dp",
          quality: "sd",
          audios: [
            {
              language: "deu",
            },
            {
              language: "eng",
            },
            {
              language: "fra",
            },
            {
              language: "ita",
            },
            {
              language: "jpn",
            },
            {
              language: "por",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "dan",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "deu",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fin",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "fra",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "ita",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "nld",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "por",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "swe",
              },
            },
          ],
          price: {
            amount: "3.79",
            currency: "USD",
            formatted: "3.79 USD",
          },
          expiresSoon: false,
          availableSince: 1735063102,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B009LRE040/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "deu",
            },
            {
              language: "eng",
            },
            {
              language: "fra",
            },
            {
              language: "ita",
            },
            {
              language: "jpn",
            },
            {
              language: "por",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "dan",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "deu",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fin",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "fra",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "ita",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "nld",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "por",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "swe",
              },
            },
          ],
          price: {
            amount: "7.99",
            currency: "USD",
            formatted: "7.99 USD",
          },
          expiresSoon: false,
          availableSince: 1735063102,
        },
        {
          service: {
            id: "hbo",
            name: "Max",
            homePage: "https://play.max.com/",
            themeColorCode: "#002be7",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hbo/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hbo/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hbo/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://play.max.com/movie/6ce5965d-cdb2-4f9c-b22b-ae7a091d95a8",
          videoLink:
            "https://play.max.com/video/watch/e95435b2-2c89-4788-b711-b7f346f03da9/01844b86-4a19-4778-b4a9-110b00b85e03",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
              },
            },
          ],
          expiresSoon: false,
          expiresOn: 1767243540,
          availableSince: 1687879745,
        },
        {
          service: {
            id: "hulu",
            name: "Hulu",
            homePage: "https://www.hulu.com/",
            themeColorCode: "#1ce783",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hulu/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hulu/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hulu/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "max",
            name: "Max",
            homePage:
              "https://www.hulu.com/network/hbo-max-1b3523c1-3090-4c27-a1e8-a04d33867c34",
            themeColorCode: "#002be7",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/white.svg",
            },
          },
          link: "https://www.hulu.com/movie/the-dark-knight-rises-51782fbb-ae1d-46b5-a7a5-d23457b8e09a",
          videoLink:
            "https://www.hulu.com/watch/51782fbb-ae1d-46b5-a7a5-d23457b8e09a",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
              },
            },
          ],
          expiresSoon: false,
          expiresOn: 1767243540,
          availableSince: 1727420836,
        },
      ],
    },
  },
  {
    itemType: "show",
    showType: "movie",
    id: "1281",
    imdbId: "tt0103776",
    tmdbId: "movie/364",
    title: "Batman Returns",
    overview:
      "Gotham City trembles at the mercy of The Penguin’s criminal genius, while the Dark Knight meets his match in Catwoman. But is she a friend, or a foe?",
    releaseYear: 1992,
    originalTitle: "Batman Returns",
    genres: [
      {
        id: "action",
        name: "Action",
      },
      {
        id: "crime",
        name: "Crime",
      },
      {
        id: "fantasy",
        name: "Fantasy",
      },
    ],
    directors: ["Tim Burton"],
    cast: [
      "Michael Keaton",
      "Danny DeVito",
      "Michelle Pfeiffer",
      "Christopher Walken",
      "Michael Gough",
      "Pat Hingle",
      "Michael Murphy",
    ],
    rating: 68,
    runtime: 121,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/1281/poster/vertical/en/240.jpg?Expires=1769115994&Signature=SYb-Cgf7WYn8OJgLZBJ8-saJ8kEBiL~bDtmyc6YVKRokR3L2EPzSMnMqBP2TbFKDsp3GuRpFFKPzVA3eFRlS5s6Ds10bQs0RHkIZwc4ggE6QuAN73qc8ne1iN2HLjgDxM77B2cbXeOJMyg1KNNF1QiHP5hlEmX~3DNN25iQQ8ncY5skDXHxtTjKJYRPa94KDf0VfzqmqgYa0ckp55ElO8zkxP1XpoQ7GpEOEJ4WdYMzhTPgyfyknVZUCP3S4XDBqBNTaWlI3i6pfMYlgNBct3LSTu3A4BX3QVEYBVBP3MhrvtgftUU2R7UkAzwMRNHg80NvKJ-8sKvS-KvasHKkprQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/1281/poster/vertical/en/360.jpg?Expires=1769115994&Signature=aFpCngTi4I-EW1Dj3t9z3SLk2eJBue7JqtrJ4KOfXP8yyC1pXG7rtREKvBFKq75Y0uVtD0Z4CCEwSiKTMC4c1rPAiNqPy6iIwkyidP7cAnQp3M260QP1SnS5MsUm0umeg0wStldF476bRYdLywIyCUj-vBT5tJ0cJenruJ6BZ0aiVRec3P2JfODM0yah~pBiJFqGWF2eT9tZ6COo9DMFLEC~ZgDx1m~TLZ2yjtW1soBvRmpnKEi55tXEV9t7aCAQ1SZZMWTxqBUTQr5WC0qDkp2sbbH0UddKfP3gf9yNspYXHAty73Sdu8tYbFn-BUiWRbQZeKvO1WjufTTYsqAmZA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/1281/poster/vertical/en/480.jpg?Expires=1769115994&Signature=PjRX3NE35bSi69UDdQJsmol~STbgWN0dPly7Ngu5EarWOno7kum79csf5cz1wNUFguTHjBl1BfsIlvHFbNykTLv76BMbxE-Ps4Y1Y0hApqlzJUWu5TgC-Xg4nCZDiccoWIdyTfjOPcIWMwdfREUbGduQQS1UePU6MfVuBloN8n-Es1d4fy-~r6FC61aHjHfH8HSSuYcnVFTXchOQTSrB5AN6XNEtOGayVznzFAfsvyVruDletQVjMG10lHjhwcWDAhnVBU8-helBZKKg4RtW~6TS~ZA1QzD10~iED~OUmg7sDuHBHUrNqkAlxIqPpANzI~8kMrrtSF2uDjeMuXw2sA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/1281/poster/vertical/en/600.jpg?Expires=1769115994&Signature=Ao-l2ZTA7o2BCBY8jdM8XshD9Gx-NE5ydGGQlgKh3tkfjpYc42JG2OtAmJ-rPfEUIAZuQJUPLlF6rYG-ru9onQDmf-YnIzn7zClMLYRMwCFn3TK8zjLgjquXIZfDg12MJIBXCMZ-IzH7YfukHmfY5QldvfxiBvfkoigB6fEBO~b5QIW5FSTA9~UuFASD80-caieG0BY6gGGNX8aJRXPJZtXotO~RubdUH6VUcH66-2J81-UkhKH~MW1eGWsa8PXhxSDCCGK18q5QOg6tUt6QIl-7522HyypCeNsR~Gt5b~qbIzYbPQcGpQ5zVkMPlVTOXTqM5AO1xnIn1QMH~Uvyqg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/1281/poster/vertical/en/720.jpg?Expires=1769115994&Signature=irSZE~IYIhf90M4CbwrnLzEYGB6~ij2EcfwcE8DfIWqn0kXAaFFjLt6rLEompyzqXEK115RfHdKbl-B3krzZMwmhGmN6Ph2pQWaIphCkz0xAumBMFWC5e1W9HjONMq88KVKSOaDoQaD7vWehSpmY7bL6ePjnT9uteAPAeFSeUJVKG~RVeI1ZfTBVemM1wB703wB2Ebf3-mH6k-hvt-7GOe8RY7Eiup5TQ~E8FHgTUFXP6t98-KExGjTe4gZHNJVSNK2k~bzOEuFTddoVrlckVZxW7kgf3zkGBomhYescd5AdiUBC-ECtu5P8X~WkT4WMKJYfxjU9KPeOmefGvCyzcQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/1281/poster/horizontal/en/360.jpg?Expires=1769115996&Signature=g46ULjzGmQlp7PZ~U0wl~OUxAlh6FC2MYffXxOf~0~bWIuebs2dYzCezDnbNlj4ccCRItG6jX7jVlLaRg49TlZsn1gflWSRfnY44CmKFNIiMwv30o8WZN6AHCfz11SbvgRKSN0SzyD-X8GhkIBxVRxeIZ8ugHdXXD9nK6pBqdZkHs0fkanw5Kgp8jZ8FaOFrUr2D7Mj3L-7oLkSkFjDn1ZKNoDpstRTfznxxbFuDMETgU200~IFKuk3A9KMp7M6C1MAlHO87eBitRmoSp3Iyf4Sh8VO1VXOHvWiDfy778XfM7JxENhhKZxRpNQfjMTMKiAM1ly4sd~4aKxXFJzIA7g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/1281/poster/horizontal/en/480.jpg?Expires=1769115996&Signature=CxJmkariGwljdynxUcn7LAhBHQhC0ckv0y8hM-00tX5gPNO-CGidIBf2jWcN6oHYT70~xuz5wU7QrjPJMT8rQu9zrXWMkDhNjqXXyXc6e2KTBQ~PDuxOh9HhcY4R9TurT1jK46fpWQHWYzUUT74ApOfuyOrX9VKboTHiMV2M9MpkEUeXL9wxHI3VeF-s9UkfSgMgb9wgojxloULgtizAvoQD7xbbiCoOi0elrZLy7jskg6-hlbBHkzzdebYDrtuHqadHoTjKlg3ULJQ~6qd1vidWue74jwOuEr5j4yKCJ1ulkyJ8FKbBhbDSVQQkojotxfWxbjDxiCDPhbnTiOm6fQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/1281/poster/horizontal/en/720.jpg?Expires=1769115996&Signature=bJpaerHkIW2rejMiXSOoMRasdrrBhtKWRfE4NIZQ3DPD5iApYjqqTA9FGTpN0qpzGAk9y9jsoiCg-6czTyhH8ysqTft9PfL6p3deSV7WLZrtYgFlAeN-eeaSwpB9fmyXK0-N1IuQ9shS30GlI3TzQJFUX69iydqyhmJK0s0sYjWOrjv0XBYZmxL5L2c29x~yf9K~XEWny5Pke1oN62OCRYzlIjk2YQUG-I68fA3VdxryK3doVdbWkeGgCnMq32wwlywvJTAD6yF2NZEtBr235B4o14Y455hxMtgKKb2dQ3C0UhapF13D~07TGTez3n81aqCxPI9sGMBwJcT5iPODCQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/1281/poster/horizontal/en/1080.jpg?Expires=1769115996&Signature=QYQbfDgCNvr-bvwMqHxSmXvA2usMMABzrXBg6kXWlm7Jr~TWnbqlqXo9l5Ywdh0563SKlyzAhUR98SqZZXyq8TM7GpkRG0GleZT2oFeG97oqaeX6FLXPcOLa3En3xnOIv674DYThT-N7Pok94-jgY5ZE1kIo4LIV5r2~poQF2pxPUXGi9LwcW0A3xk80OPoIldraF24ysJbWE4~vptMcl04NoZnnXdZ3MqENW~EsyPYu-8O1AcA9DnmCENHjlDrtrV9Lz3f-KxQddN2j4yudGQA0Manvn7FmDAYqbhxEe81yDl0MBUZ9ooriwGhRwmSMOXj~aksSMomIZHfU8uPkvg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/1281/poster/horizontal/en/1440.jpg?Expires=1769115996&Signature=hzHtlBsC7bf~pquyJp0W6H747vMQm1GYqEBMHDL7jp05yMBK5iEP5yloVdR4oIvIYou8G~g2GbMUPduLqB~5hAVdm-gnPkNST3uLbEBrjC22dAALjpOGHVc0ZlYqmZai5meUwZQfhg4bs5bltKdYeYeD0OM8sGTaRoJ4bUccYJ3vM28lL-oNfzwRBnudepluW7u6tmKxYvFN5Xe4yZ1URS7TscVisa3RAAyCRN4Ux0vfAaZpLJYHATXIzJ4ghCLW8SoZCEXlxKWNsYKdJK0hNNu64WwMFoc64ANidVLN5uxcDuFhKjPVwsHL-VoauZPSFDPY7CtF1aw5mWeaar6Uhw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      verticalBackdrop: {
        w240: "https://cdn.movieofthenight.com/show/1281/backdrop/vertical/240.jpg?Expires=1769115988&Signature=X36gVFcxTqT4nmagWkYVisdbVptkmnuDMd4hKEjLokPNTbH1cs9r8KDxEfRjfMXhHQ0vWBZsvj8~h~YuRw7BBrFHPcH3b4Zto4~dEz~3YzTg8VrBS4K-7tWDY0J2P7wQ9kLI0~lBNTcdHzyts156uBdsUkiWx2BPya2ryBq2dzPbcsfZn-Q45jsjKuOLibSWD09x0SfBXgUFaKAGuMxRj38NG~9KILRqRqN6b7TYgVR6L4NEhf~5AxXFqGSU7bN9TtnStcqiW6cCnFfBqc3w0tJRmQnNod8vF9Zpi401MNcTGxz3CsajWbdNJmMwpntklUbYe6xHm6lQrhIHDMwZRw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/1281/backdrop/vertical/360.jpg?Expires=1769115988&Signature=Eel7b3C6BG0x9oTTDbofzis2yCt2RZ23Tgg3N7nmkHcVl~DxgARSilpVu8kpQF4U2sT1vDiQ4UG8wQtWcDVGvaqVDMKwUFisx5rShuVgWVI9A3J2VvwNtJZ-ZPMWIyBBNG49jBFqBR8k4ElTGD93A2o50Ow3odqsbiEraxfohgFu~9yF9srFbmuumsFqKeRizYktJBwv3aa196QyCeK1BWWxwsacgOpgqHoAyk~MyGYmLsHdc8f34EASVwAgVDMzZRs4F12i4uq7C~lNonmHZc4BHNOAyWDgJrymN4hvpQ--ZXqQW1IgR8u0t6AL3IzKS8lGErVv~vWZuJ4~IqP7uA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/1281/backdrop/vertical/480.jpg?Expires=1769115988&Signature=jjvdef0Z0i3md~ai4Sv-7xC8L1x~aM4sBfVLZZ~H6tvbBN~hltUvtDq60K8ZAVerq6jlA4GcaBLmDJZpQ3gFxKjLyhX4skJKYPBfE4Cfd4TeN5jK1afX-qWMr0eh3cm0GQJLRXZHHf9ZWna-SAKMw6mOzVmi-DO6VUZdNd-adTs74iKOQPKzHUx2q5NCPaHUFTFyj-RfPMVVFCYLKv4EyTtHNnQfocEVbq-bnqnuDjI1GWHtGEx1T4E0sfVzkPqP235cOQLQreVt6eUmdDneIayQFLtxkx6SQyPW0dSH1tj2CGF-cRDtiCKAyfh3-jyvFZ7mhlBLlCRs5qenEhEbMA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/1281/backdrop/vertical/600.jpg?Expires=1769115988&Signature=RN4lPlSA5r9ioLt3UYviMFMBy0tCHzw77l27ewERyvN4M2kc6UBLe7jVWwihlNldPOXVg8TkFk9GxcHXkCJd3YwvkKPamlESJnFaFytRpTU7dKg3pR8Kznt3UG-9PI2vcmyUJJULI37~YHoEihkPCdoaV4W79gpknmjT5nQJ2Tp-9KZqtm8faVF~kNS-64jDMAAQwBPQXkI8Cwuzv1CNw3e8wgzc9CGPY78KnOS6PaZ-SxypuBUPEDce76xbtZF4xSe-oKmGuGMdu2oO~qmGA8fuw~dFAolyPFwhxgu0dnfTAh~A1b0iykO3RJdUvqsJ02~MAvZV0Te2THXvA~~02A__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/1281/backdrop/vertical/720.jpg?Expires=1769115988&Signature=Y1eXzqNXZNLyWJFFa99AlwBjcEiUJd3AYYZrO7R0JGndW6rsE6DKJTwVLTymHmuJu4O7pBrTq-4bC3nXu3CTj-bgR4On2n4ldYY27-fwYn8dDJs6zBOH7H1SlpkSxdXH-crLyiM15tdUngBdezk~17Nd-M~8-TVrl0FAbp~HjH9VOO70aeOeY1zqb0BcUTMiiOTBoNJmg~kMev~FEdW34SDj0pEZ7tuNjZTdRq0qnorsh0KDiGmErdvKXZcmoOySqnwUhC-Qq5x1PCw2WPmd7MTWQOjXe7o5HeMeq94M1wkBcLiQheR3eKJFkSDopjHvmvc5ccne4MD8lmBmKKy9NQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/1281/backdrop/horizontal/360.jpg?Expires=1769115991&Signature=h~vNwnuMFUgZL5iis85Lkn8Ps6W2~ggPYFRIUzjVaVR18CuvBs5WbOd~lszmWx~4cEnkBorRqXO66hlJEHGr733sk5cc9tNgGD5e6EM8z9Y19UxPnhaq6g4lClSLXDVcGckHvxJOndE8654J8fvhlG1ar-OGk96bilfAU63hHxCC8Za8hE30hOCrMsMP9Tl16Uivc-jB4pE-vess3fdqViZ-M9cJU1xOtygfFlhSyGgepqs4sbtwb6vjYs53ac-DYt7ARWn22r3wZnRN0NSQ6pKjP448~KcktjrvRtAySFhiN1KtVzSOgxrsB83OLOx3QtZcJ7ULOW9tJozVrFlo8g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/1281/backdrop/horizontal/480.jpg?Expires=1769115991&Signature=YAWHm566anvH9bRO2QuWxW23DND-8rTRetinnH2Jn5oaUxV7LTjKqtblFtSW4Qp1qx4-bY4ppyOO7FlO6wHx2d3zYDOXiiYSHVsWLhYl6Y2CkMPRPuugA709K~fDfKN9hH-SEl~qVjbTlXF5Mkl52KmtSMd5vAUkmLJNVuhnsim7AoORd2FVsRhvvMteHls-s7ELjb04RivyFIbwlYKfmmkBtsZtDaOib56RMwmSAeNMh0DXDcRzcWY7adFwOP~G4QMoQtJzEH4okUweoXGeRAHE2oaS1SAtiIJ0Anw5somWh6ikhOwx0v7gETBxkeBTAVLPbO8NkMXFvPj0LXbDDg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/1281/backdrop/horizontal/720.jpg?Expires=1769115991&Signature=O~VerUi~KBrN7XP9u-1Kisg1cwzi1F-x0EaqtF7BVBsmVknW36xyqT6ZT43dNI10w59ffhxHIAhlKfMpyRVxq0xy27Yn2S89kcSLe-YxRwUoeQMA~AEY4bIvdtxbgLcFCj2g1jv9qn1RNvODbZrVWQRaEsVHBqfJm9kOIKiFZsNJWZI-s0JEzTUD1jgcYj9GRdwcfnPpRQkO2hz7o-EkNI8XflwL0i9dpbYGuui6ad725jeG2z~bVZ8QFuSQMQGgyRujm4Cyxcd6bs6FAZrYQHiZ0lEshAYUi4jK1rx53iDKysWLPiU0RcJdP1dymtkM6rR7ugIQ5opNYjo02kfCEQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/1281/backdrop/horizontal/1080.jpg?Expires=1769115991&Signature=T2RWMVrnwrkLZlZe~S4GwDMSVUTg5pbjRT2LWTVoIhcXee7vWHeGLowuiu1ZpqQQN98dIl4nYn1PzuN7nvRyowt6zaYf70Qkj-NQfmHo9THcRQcSJQ8iGeO2OwpP8yzAxhXEcaTPWuW8LjBxH2i0jUqrWC9e5DY0v03WcZZX7tUzg48klivPKY9eVkzIyVnZpz2kGI9JWSUbupyibLCJH9O4f~1Zf6KksO1TYI7bhp-dg3L74aSQ6V3pHy-c9wSNvurvOI~F2QuyBGX38gXKfGELi8aqr5SI~wh62Fxk4fVJhByEtGB73HmVbCTimGfqRq-sFlDYTqmb6TG1EBim9Q__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/1281/backdrop/horizontal/1440.jpg?Expires=1769115991&Signature=VtB0fX3PXrgFCiFSptSqyDPG9hTmlFQg1xbuz8YvTSKIwIJVVrFSxYpQjuye7d232oy6jokgFQ2eA79XaNJOwtM62Q4On3G5mu1bHRTLMBLNLBFVX16eZ1Dk5zLpeZf-fBvXv5-zfH4rYtvLaoJFbprUKxyGPGKVgtqK~UkSJaAwz9X6yFY7yiamGWFgFmPUgoZkQggkucKgPSwAF7zrj0~kXH9O4VCPHGT44P8nSqYClqOMeeVI0klZmh5-G840uGrAdbanLYe3PLkxUZjzLSRT2hGjWN~kN-kEXQ2X3KsAXKkAyqsP~rvuvpkttacM81Ab6W3HDGwDOGhfNGuBuw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "hbo",
            name: "Max",
            homePage: "https://play.max.com/",
            themeColorCode: "#002be7",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hbo/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hbo/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hbo/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://play.max.com/movie/7ebb10fa-4552-405c-a5d2-3cc5b21193c7",
          videoLink:
            "https://play.max.com/video/watch/d00bbbc3-85b2-431c-9f9f-8f6269d1642b/ffb6310a-71fe-4015-9ffa-eed56f10eaca",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
              },
            },
          ],
          expiresSoon: true,
          expiresOn: 1735707540,
          availableSince: 1687873223,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "hbomaxus",
            name: "Max",
            homePage:
              "https://www.amazon.com/gp/video/storefront?benefitId=hbomaxus",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/us/addons/hbomaxus/light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/us/addons/hbomaxus/dark-theme.png",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/us/addons/hbomaxus/white.svg",
            },
          },
          link: "https://www.amazon.com/gp/video/detail/B001X0ZKM4/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1689985225,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B001X0ZKM4/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
          ],
          price: {
            amount: "13.59",
            currency: "USD",
            formatted: "13.59 USD",
          },
          expiresSoon: false,
          availableSince: 1689985225,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B001X0ZKM4/ref=atv_dp",
          quality: "sd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
          ],
          price: {
            amount: "12.99",
            currency: "USD",
            formatted: "12.99 USD",
          },
          expiresSoon: false,
          availableSince: 1712557058,
        },
        {
          service: {
            id: "hulu",
            name: "Hulu",
            homePage: "https://www.hulu.com/",
            themeColorCode: "#1ce783",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hulu/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hulu/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hulu/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "max",
            name: "Max",
            homePage:
              "https://www.hulu.com/network/hbo-max-1b3523c1-3090-4c27-a1e8-a04d33867c34",
            themeColorCode: "#002be7",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/white.svg",
            },
          },
          link: "https://www.hulu.com/movie/batman-returns-7790712b-297b-4898-8fc0-f4dee57c068f",
          videoLink:
            "https://www.hulu.com/watch/7790712b-297b-4898-8fc0-f4dee57c068f",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
              },
            },
          ],
          expiresSoon: true,
          expiresOn: 1735707420,
          availableSince: 1727419160,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://www.amazon.com/gp/video/detail/B001X0ZKM4/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
          ],
          price: {
            amount: "4.29",
            currency: "USD",
            formatted: "4.29 USD",
          },
          expiresSoon: false,
          availableSince: 1689985225,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://www.amazon.com/gp/video/detail/B001X0ZKM4/ref=atv_dp",
          quality: "sd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
          ],
          price: {
            amount: "3.99",
            currency: "USD",
            formatted: "3.99 USD",
          },
          expiresSoon: false,
          availableSince: 1712557058,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://www.amazon.com/gp/video/detail/B001X0ZKM4/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1710028469,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B001X0ZKM4/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "deu",
            },
            {
              language: "eng",
            },
            {
              language: "fra",
            },
            {
              language: "ita",
            },
            {
              language: "por",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "deu",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fin",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "fra",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "ita",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "nld",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "por",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "swe",
              },
            },
          ],
          price: {
            amount: "12.99",
            currency: "USD",
            formatted: "12.99 USD",
          },
          expiresSoon: false,
          availableSince: 1728800221,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://www.amazon.com/gp/video/detail/B001X0ZKM4/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "deu",
            },
            {
              language: "eng",
            },
            {
              language: "fra",
            },
            {
              language: "ita",
            },
            {
              language: "por",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "deu",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fin",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "fra",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "ita",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "nld",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "por",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "swe",
              },
            },
          ],
          price: {
            amount: "3.99",
            currency: "USD",
            formatted: "3.99 USD",
          },
          expiresSoon: false,
          availableSince: 1728800221,
        },
        {
          service: {
            id: "tubi",
            name: "Tubi",
            homePage: "https://tubitv.com/",
            themeColorCode: "#ffff13",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/tubi/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/tubi/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/tubi/logo-white.svg",
            },
          },
          type: "free",
          link: "https://tubitv.com/movies/638320/batman-returns",
          quality: "hd",
          audios: [],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
          ],
          expiresSoon: true,
          expiresOn: 1722470399,
          availableSince: 1717277395,
        },
      ],
    },
  },
  {
    itemType: "show",
    showType: "movie",
    id: "1627",
    imdbId: "tt0118688",
    tmdbId: "movie/415",
    title: "Batman & Robin",
    overview:
      "Batman and Robin fight to save Gotham City from destruction at the hands of the venomous Poison Ivy and the calculating Mr. Freeze.",
    releaseYear: 1997,
    originalTitle: "Batman & Robin",
    genres: [
      {
        id: "action",
        name: "Action",
      },
      {
        id: "scifi",
        name: "Science Fiction",
      },
    ],
    directors: ["Joel Schumacher"],
    cast: [
      "Arnold Schwarzenegger",
      "George Clooney",
      "Chris O'Donnell",
      "Uma Thurman",
      "Alicia Silverstone",
      "Michael Gough",
      "Pat Hingle",
    ],
    rating: 37,
    runtime: 119,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/1627/poster/vertical/en/240.jpg?Expires=1766863552&Signature=cWLftfCocB2-iXGbi3gvzPOm7~1lGtbOnquG2qsod1eG7QBrVr-gzl6SUjCh3XxyRs78HHKWDqeexlXqZLeVGO64ecSJi~cuLXAKbFRqNmWAmpIy5SVYBSRRhUh3HMQMpEJue~EgBG9PdfHHTLq6ATKeRL43LCoEHNEPsFfzLApgVIvyVbfypYFfK8GS6OqotcXYQrpkKIkUkitFFLiiKBTkRr3SKZ6ZB4eFDA2o8JkZxz4jmC925B7lV1u4gu7lXMPr~uQaY9jF2Nt-JkhQCZS5Ch8bkLOcBC5JqIxozo9xA5ffbz4ZqEmh1vAXsuI0tXF3lV9OhAAa48waF1Ak6g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/1627/poster/vertical/en/360.jpg?Expires=1766863552&Signature=QR0OO0J~82hFbLM4MPdGl2kTMcmIU8mYKQSNOjvcynevarA9mRRQ3zazGa-pEXZDFOn573O2oj9JmmJ3OkWxwcAlMq6H334aFVwIzUcfesZ0-0rmFKefIUUK4u1PfqyPbgx6uFxxpnstt3jL9ak3iHGcfCuBeKBcQRf76u45-aj1oBzg9QFxNRzc7UHyqA~wAiPRK8g5rGOcX4I0sgS9gIQJgVFw~U62EttFc1nHNaFv8OQBcDCJBZGLdIDGFWZXju-hyXP3sGT1AN7-rUgGqotWO7eiSfEe6N9OJNR-icbDjelKaL6t90l9aCQ6NbUaeHfc1Gq1pZUSIfxCWsr9eA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/1627/poster/vertical/en/480.jpg?Expires=1766863552&Signature=HVty~iN8oCzJyXCuyOesOe-q3pqk6fqQ9xA1CXO5ob-77~o72SkHXjw4wL1JhgAC8Z130IgkxJSb8Eu9Z5m1bl9lYDLJwPaRX~UG4oD0nfKC9eX2XLkgTlFMCkMhFRNGUBvyuSCVMr47WbrHPXReou0bzro5HAxtscm4vkB-UFTTi3czbHcsCDW82jggprhl4KOl8BMWspTQOBeNqHE1WOSa4g-8ixFOiSmzidNomLIktY6EKri4uMwuNZg19Xg3SRrZGWxPVeUf7Fo0tEIIiWbTHvybhsfKeesIpZ~qNLFacVh6asUHbfIjSbbfEmhSp8JcFMRGfayTwdu-efn~lw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/1627/poster/vertical/en/600.jpg?Expires=1766863552&Signature=cYoDYThHHithJTJt45htzam2JfdiQXSTWTy7Itk8sLLCtnqc37j8cIjqeWSiO3RRgVhz1RucpPDZMppsI7my8bMk2yKW1yMnztcUaRdusMGpdxyZG7vs3tX18DYoNS5ycYkuSpTHnBKPcI8BKnfHYiEGLbb-b-ybCLJ8ZBIx559R9T4uMxRE4l1KqabGh3hOntoi9XZQPSvIEkGWhzHt~LR2YKFTSOfDMRfeRelt8KFKvxD9FhqrX6L09LXqTseNnqEidNt0yFepPtJF8lJByUuoE~wzYoaTTZG0TQpomN5b-2PWc5vEZDW08~pGO1evsuqjxbeT0353NbG8wtgh2g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/1627/poster/vertical/en/720.jpg?Expires=1766863552&Signature=DGWrdA4XQezs0EDBNxp2kEBq-DHEQS9~kFDI9bmDnO1TVTO-GO1IABT93AHFcyQImwLmHNa4gwPUTxR2Wo1tbymr9N2nMKX~97RyYRNITnQ9Y3La3QI1pPE2zM93SvkObi9EFXzFqyjkDoVuErV4OFRjyUMkPZzPD7iNlyUThZqNJGwYWDlZdxveC5kpcOJeJvzRpfa2~lSNG0je0PC0nR8FWEyppRJpD2KdYD~YvQDOcloPq4YHQRofhKdQXmLufU2SBQM4xjnXfBckBBLB2D-BH7nS~ql0x~sbQF2OHXDBpQBS55-vOx7nTRXBK50wnIr~Cyq6sD3~1q1Dcwe8pw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/1627/poster/horizontal/en/360.jpg?Expires=1766863565&Signature=VzHAuNbCH6jJPomCRLpBgTf4xJBfBKpIyqZ~7tjf2~IjLknfUvTUl2EzWGzF-RP5nqxHhM7yOTSnXGDfTtM2S9xDe-bqCVAnKCbYN8o6~8IvZiun46r9FciR6D9bwyrMjZLL1k1KmeMVAr1W86kqW-LFsYnxf~u0UdeM2TIFUnrhfhzRS9fQyFI-xhoNpylg1HfN7E50KWJ7I62yWJ2nc2D12PDMZ-s-Y3PIOTUXhHAQT~9FWra0lFJYUCmiJoEdg1T15tKQKarTMzl65CZ3~4nFgakU4lswICFCgq2Dy6aMKobnPUOitLjzgAJhovPmUejaFnZ5cyBzKYAIaRS6hA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/1627/poster/horizontal/en/480.jpg?Expires=1766863565&Signature=Rj9dKtHhCoW1PazifTWBEK0Bdc3oaF9FKa~WxxIyLQay-IJYpurMoHDOarLfIWLC4q4PyKhdsogrWIcxAC0sFHcWVHhbKmmx9ucA9rqM4IfBKF~YEL3LUHHr7WPFpi3z3esyxtLnAgv77Pe2uLTcfN8szPoeN6KxoJPegfqIFKKs9qNDlamXbiE~v057e0jYzMN-vjRHCMqkD-8k-x9OJrhqNnn9h1veQK6DZls3GOtMOk9A9QX5kVDp2zqQGC48LoxLinHhey2EcLCRHLJuzFnA5NiY1aPBqVIAiaXZacIUXZiu4lZbFle9skLuddoiUJvCTgp~l1ClfbfAIPwkww__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/1627/poster/horizontal/en/720.jpg?Expires=1766863565&Signature=KAu9-seRZgnvACym1CHNSs47fa-D2LE7Oh0DIyLnlGinwsHqFqdvSm-UEZsnCR70Os3w2Qs6xlWZImaxEW-nOeCkFR~yBW0lCGl49AYQjp4MvjseUgBYNbgJPUeRDaOYyct-XbWWXidwgB1A3gmz~~cJHTWnebiTPdzrhu~zj0LYF56YDjsxO7dnmBQOFFZHWuB5qsX-qRTnuCfBCf~uw5l~xKoHJ3KRXq24PmSxquDP018AIFpgWN~rq61OOxDFXxo0seiDWwQTXPkPtZBrr3d4LP6dGcEMkHx-YIbDynH5piK7DWSkbcwgjpPqEnHaVbklE2KxfPxDMkKEvqzltA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/1627/poster/horizontal/en/1080.jpg?Expires=1766863565&Signature=YHZwCmGSiMMPJenUQBZnT4M3WZKA8gtO3KYe4ukMfa0YX1Uuoga2b02JjELUxcEooJj7JBm7HhB6~gAy3iqE9NWVU4J1MHHzlg92Rzhi6k77FIvwQgcqH0e55qacfTcsOV8iyRGJx7aWGipCmzMBE4toOIOipoqhdWlsra3u4uC8tUdQUvKC5Zbdn50x-IdqH~85Bin~P1ThawD3Y0-z5X17y3QhlgzBVi~Z1LH5cVK6q1CPnd9UoHElE77-2SBjt7GBAvcAXZuSdnqFmnqgbp~a-XRQ8JloGnfoXjyzV9ayvn34-u2~vCwWr5svDQOOi0SjUdEJhaQYbAu~AUaX1g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/1627/poster/horizontal/en/1440.jpg?Expires=1766863565&Signature=j2QJtla8W7DkeUoCtY2SCeU9iiVTaJ0mNH0xawVAwDFiz-NlEd61RZPNB9Ap~WC7LnQNrA9WcLP2n5pj2tW8GyF3yJclOsIrwNX8yhNIWn8QWsOljp3zJ5UvFn1EAYXZXgVq3xxF09LXxXeaaFqdcxvbx9f6NEiSMXycp7qbqBBab2Fox-973jQyWopB6J-Bfkx~o67OiFVD2A7eQH7qSun~3hUmeW~S7bkQ4jRS0zQTMA6wTEuJ94LYY8vQ3AgaD2D9Mom79FFPzgK5JmJ~T7RkPLqubZkNHiuFHK5cSd0uqMByShH6Shd-psKLUJu1QucgLY22Lo5gIeZjiv4kJQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      verticalBackdrop: {
        w240: "https://cdn.movieofthenight.com/show/1627/backdrop/vertical/240.jpg?Expires=1766863525&Signature=gg44QLYWNOUTSiPvMDf-aOVzN7aOtbM-cypfkyHyblBcMplrjNZjLE0kPpz39Q9oisOGtirMo7xTOmrkD-Uuk83UuWnYWc1c-5YCVA1LoFFsos~L1RJ9Ih3WCYOoKzG78FysFjv4qeNcn73yRh2VZumZB~bhzWCtViDs~xQOBDPFW7-zvY90e-BTN2bDHLvWWbRhjjwZ4A8Nru8GSG0Da0dLSir~MHGyRC6fda3olZecIADNtwFsICP-lIrVEq1VPKpfWhszNlFu1iE0fnCVCB14oCymw8wVO8NG4pm78dRpH2RwS5k6K~jyyI7NF5B2WSIVHbPBc-QaA--79lHJvw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/1627/backdrop/vertical/360.jpg?Expires=1766863525&Signature=cEVfEGF0BUaq0aLd5WLDfNOV5IeJhdN7ad5g38uwamVaIvdatfGNyuvwvDUZwPH7Ks6ntHnURKuwp-OIXwUeTVH18mAqs41WHVAkj2K-n1oCz4GGFnJWLJKvbBonN5mueiNRtqsm35X8~r~HdEMFVLUCrNWRpsj4qvlQqV~z8kBfYaT~VPTV-ZuLGgI7xkhR7mL6yh9yQcBVzjrmXdsgBZDeieNM8y7dPafh4atKWN7CwO0Kw-rnKDVftv6TU6URl0INb1geGxEWtrk~ze5xrKr24WbQ7TvwvEGZJaPu1zirJXY9ae91THlpk7SHJDUh2Qjwh7ocYV6wFW2P7ipQTg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/1627/backdrop/vertical/480.jpg?Expires=1766863525&Signature=AbS7PJQ46v3TAkCcCWydGF7meqAgq0IiZ7NZ~HZbOPDHsNeGvajpS-lgCXlASvWdPCCPeU9unVXuSpnyWdtZLTUu14bodT0X5D3AW4R2G51Q4yCYCfBoo1erKDggXeXoHyisXT8znOdW~AvXZzvogH160cwjgu~whGurrjAYArtx7P6Q57vc6sq5loXsfSHML3naQ1PXwMXibszSGZIf0IooQsjZ5gJvYtErUDjLFThqHbOvgfawfL7tWn2EPtjk0RFmZJFHEpYQPzGrvqjSaXlEf9SUKZzkMgtB10gmzNNlMWQE-ifmH-CvmL5Pnwlw4VKL04BpCL9zbbuz4F4v8g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/1627/backdrop/vertical/600.jpg?Expires=1766863525&Signature=RlrKboEhHKAbdExkDDnKqeXUQ~A762zV2QHvLqrqDRwbEnngfrAKbKNbuPlbg5hDuu7GBPV0sPE7wJtkKDIETCwIyKjBoRTOztdnDy5A~msQGMB52Uh2~HfoYGStzZ0ewjgllUz6p2~wR39jF9u2QuWWaUW7KzA8NbT8cApVrxbicRyzjT2N~txMTSEifpJMWx-dxzSOGdBDa~GbiYoDxoW8t4bUCp9dI6ii5Q35g79JUpo2ULY14GmNJysrIhtOoBQchvoeqzwF4COvjE67w8d9Ip9XpL~nY3BlVmJ-9EISoxHDv-j6VqGloJZYtBvXzrmxESjAKIm7bgeDU1KaUQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/1627/backdrop/vertical/720.jpg?Expires=1766863525&Signature=XvzKwX-msDKXFWXOCbw-dRerOKunMkcti-kRNisau0fl1v8BuFScobwEoZKUlmxsuk-wr2cJxWWvBA6-Rpa6dBwq7IXHjMReInNy0N57rzxKR9f66~wCBoa~1OKzR0wu6lSdc9AgVdpyvs4l00fN-MS6fitN8MJKZkHaJfnt3lKsDFN~N4o5D5O7QwD9yUM~Rh1VQCLjb~BA6RUOmlHmjka1APE3m-BmWNqdZBqg48lr0Ye8lZrg5zK5~rW3iFdo07bQglqOymAsJcx0U9V588T7AvrNyBQXLw4vw~9jF~pS4c4rgBK9nlV0~VOxoStMleVrlxSF~G3gQIh-yievfg__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/1627/backdrop/horizontal/360.jpg?Expires=1766863528&Signature=a5PVpGDXGM0qzbeOeJ8bwa~2yHyV0Etu~EcR4-epjNxqis-0RrsWMpyXTK5jzLq~MAcLZHus2madJzF1QgW37wLyNGh-HlSMemL2QbRvoZA5qSa3-m9cK2DWOckbB73YJPlpytmTr8K5lIqgfJuxCBiKq~D1RCalJuMcwfQWO5tNQdWQzIEjb3z2rSoHsrUenQsSQLj-2INLxhWnTeiMHlNDJAThNFptX725OUmloykuTvmhFNBxx8FZfC8FTP1-YcDSsNL~liPM1BFsvmc1mEbtJSZ~LKOowrG-4ogpLBfwsJvWKLW5YkPsxMNOlDBOSiGLamqEgxd9EbFTMg2dPg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/1627/backdrop/horizontal/480.jpg?Expires=1766863528&Signature=RZdBvzi14azWxCwv8xMUKBlSZmFkt0znYfy7FSqkg1wez~ZRZFp5KObYmAjdpTsXlHU~bcspsFc6i1Ys4tMgusw0gY8ZrqUsphCcGYNTB1OnGThleRj0FsySfP9VDGCafJilRe~k9ZB-YAsQsaXtyQqU7aeZqlMj9bR6SsBUJSSxOUJvhBAFscfECEOmEOF0yMP9V241tHCMPXIhShb77TAZt4OwBEk2iiy4wbUeS1M-0rvUuOJvsQhxnajqjCwzbDLne52VrDYGQOeQde1xOStKu-1ogBj16Z94JSpVwTLMry1cVaKgL5~DHTHTFaUa2oy41li6Bs4a3tscbfRWIA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/1627/backdrop/horizontal/720.jpg?Expires=1766863528&Signature=CLuP4O0uIxO0PRD5vqmqXCG4qAUm462zNOf6pAsTt~uQJ~m2UHA68R3luNYMJ-1dfDsfBORJvl8o8YsIs1PqxUc~OaRV7OBzqkiigQcZjCypGbQdckqA~JVWSGto5Ll95HPgElYb8tuAvlnfkLPPNdqZqgL02XgU-g2VTjp4Nh0hMOPIXOaqryRqkCbWmcPcqR6nMan-vYimhKOZOY2RfPqZowfalyB6HK8rcqy1ol~OPQlwFDKj~qqzEXeFd0gQq-qtq7H1239vS7swR6X0rWWQv02baSbdSgIHuEiAjYzcHfVYJNCm0OUeYApeG1NOis6Wtky1txLppZEDE23kDQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/1627/backdrop/horizontal/1080.jpg?Expires=1766863528&Signature=kIScO5gIDqdXJ7upuY1z2CrEVuCYU9sL6p5Y5DzcC4SdTLP9rXqTucFLs3PqjVUWoDIRtauNBh~KLh1VCUpOounHuijAkS2Y~HGY5kbsP3PdF~Ep5QF5I~e0xyE~UR7IqW2HHgwmW6lhvcjEI5UnHCNtsWngmUkChVJg2tgQKtDDtDVEBahHjmmW9edEPURJvma-uA970rIX-~k7ZJAn5zPo~TikMZxdATdZ-0N0cleYmLwLeReDXvi1JxUD~ThZu6FW6E~gHMBjqhVukiNgFGKaJpkFv1Q~Q2tR18ORE6RLgMV2Jt90sCq2I3kmtx6PeIZJG8PQ3Wxer3h1SNG5qw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/1627/backdrop/horizontal/1440.jpg?Expires=1766863528&Signature=bXQumPSLDL~cAk3WWiWs7Wxs4VSQ3hJ4i1TfaaatypCZLg2OaDI2lW5IBz03lPxwz83g4Nr5AqhGQKlhFA2AM4Rq92NH~QzH76X-w6ZZr~eYKx1Ci6yR3SNG50grrS52vNIbr9QeQoop5~VX~po~7yZmn~Lk1QGh5qiuBcecIBa8SGkaV-T4m9LdTKdSA~plIQXVGOZTyTOEPWEr-M9D8LUra-2zhETYbg0rcX3wrc2uvrDg4K02tJIUv83mOZ-youZ9rK5WVblmRsltHqjjlsvdu9VSesCkkrtRYoDvLoZNN20oeTLOj-brdI4YnfHosbXkktXHNTwx~f91IKpYWw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "hulu",
            name: "Hulu",
            homePage: "https://www.hulu.com/",
            themeColorCode: "#1ce783",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hulu/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hulu/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hulu/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "max",
            name: "Max",
            homePage:
              "https://www.hulu.com/network/hbo-max-1b3523c1-3090-4c27-a1e8-a04d33867c34",
            themeColorCode: "#002be7",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hulu/us/addons/max/white.svg",
            },
          },
          link: "https://www.hulu.com/movie/batman-&-robin-ac23c461-a917-4ff1-b00a-04bc3be290a4",
          videoLink:
            "https://www.hulu.com/watch/ac23c461-a917-4ff1-b00a-04bc3be290a4",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
              },
            },
          ],
          expiresSoon: false,
          expiresOn: 1767243540,
          availableSince: 1727615613,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://www.amazon.com/gp/video/detail/B001XV75MG/ref=atv_dp",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          price: {
            amount: "3.79",
            currency: "USD",
            formatted: "3.79 USD",
          },
          expiresSoon: false,
          availableSince: 1737549604,
        },
        {
          service: {
            id: "hbo",
            name: "Max",
            homePage: "https://play.max.com/",
            themeColorCode: "#002be7",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hbo/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hbo/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hbo/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://play.max.com/movie/02fe7d76-b386-49bf-9f79-f3cc9b7ff832",
          videoLink:
            "https://play.max.com/video/watch/5ccf8bf6-813c-41b0-acc3-5748b11be496/ddb779e0-3f76-4033-b534-4e660f7bd904",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
              },
            },
          ],
          expiresSoon: false,
          expiresOn: 1767243540,
          availableSince: 1687871111,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://www.amazon.com/gp/video/detail/B001XV75MG/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          price: {
            amount: "3.99",
            currency: "USD",
            formatted: "3.99 USD",
          },
          expiresSoon: false,
          availableSince: 1690042915,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B001XV75MG/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          price: {
            amount: "12.99",
            currency: "USD",
            formatted: "12.99 USD",
          },
          expiresSoon: false,
          availableSince: 1690042915,
        },
      ],
    },
  },
  {
    itemType: "show",
    showType: "movie",
    id: "7138",
    imdbId: "tt4853102",
    tmdbId: "movie/382322",
    title: "Batman: The Killing Joke",
    overview:
      "Based on Alan Moore's graphic novel, Batman: The Killing Joke traces the rise of the Joker from his days as a stand-up comic to his evolution into the Clown Prince of Crime after an encounter with Batman that changes both of their lives.",
    releaseYear: 2016,
    originalTitle: "Batman: The Killing Joke",
    genres: [
      {
        id: "action",
        name: "Action",
      },
      {
        id: "animation",
        name: "Animation",
      },
      {
        id: "crime",
        name: "Crime",
      },
    ],
    directors: ["Sam Liu"],
    cast: [
      "Kevin Conroy",
      "Mark Hamill",
      "Tara Strong",
      "Ray Wise",
      "John DiMaggio",
      "Robin Atkin Downes",
      "Brian George",
    ],
    rating: 63,
    runtime: 76,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/7138/poster/vertical/en/240.jpg?Expires=1769135342&Signature=i7XjvcGjpEN6eRGUSmwrMTIWZJoXP8oH81s8gTfFmQBJD4WkcxwSS6qXqLv8tAzxoXWHa7ScuV1qVLraVA5hxsCxd889HdaGijxzIiMxegcdh9umOr0MDxSQQVjWTOCQgY3rXUlwEUB2WlxTaBxgLpPKlK8e4kNOqFS9qKs2vg4RRGn7u2hKMUE2GLSfYxfn~xlo~lHjjNrWEzKw6VQLxtUIbtBzHtRfFgCsqO7aLDGnijuAeYjGCcsSy2u8-UMsVcYKwP6CzJp0UkghQDFjvexPWWMQNH624c~I~nOnZ4KC71akQicZd5t9tGKVLkxhGYyaQAVF8YHUY236G~TzKQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/7138/poster/vertical/en/360.jpg?Expires=1769135342&Signature=HGJl5-Y5PcRik-WS6krt30Z2NS3Ziz07cbGbE-eqNa9IfqGZ~rcXCAiDT2LyVhBeWvhCqMNwRo4oB8uaQ7Y7c~mZwq6iHgEOCOEdBRDLfVyfoSmoh~8g2dPs~Tj~c1L-x4v8mQwPgh5fhGl4NzerKMuNeI32TQOoYFke-DxcQMSK51vYQVx6roH6lKwaYfGsdzMQy8O9dPoz3pdcnXh6rxeEGCpX6YYPJUo66t6FYTEDUasrPLaLn2XFipd1GBdHAn1DF-GCU3T2V0DhHPKLQs2olmg9Ks2~neIqHV7JWIm-AVhmKz8K4HAyik5gkq9Q9G4tSLRD3nh1e47Nb3CwyA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/7138/poster/vertical/en/480.jpg?Expires=1769135342&Signature=lhEbiq6fml~5VLFUYuNxcgXK0c1dZyjfo8qTdPQjNuCLs4ubS~DFyz2XYQYSoz1rnSsYJpSiGswlpHaBYzQvRhTdDQF4V7keaiJ5KRUBlomigBa7qJ3kaIa5ldCJNln7RqXwhn6Xwa6xF8mOw-5gKtuhlX5~hVQWMxQmsAMi4C6VwXztarybYecfMPPhZBgh3TGSrMlaomYfEPak-pOimO220vJQa0SeZV93U5tC~ANT-vvaO1CT~m1Hlrf0KP63I22zWHfuwNr7138wblO2IiVbW5vWzmw2FaA~~zldJgo6mqr4aMy7KqtdTrb7nxERlCmCxFbpdNN3YCGO-3uMew__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/7138/poster/vertical/en/600.jpg?Expires=1769135342&Signature=OfDoWgh6fTM5XXSXdFI61WMw-HCnbzoFv8cVj5GWM0bfo5NGDdirEJQjLICQ2V0NKTmc~~jKyDwGLN66tpV-A~04db5aGSwlb7OfdYBLAHl-IMQhjsgPaxNZ4P5lJgvxcH~MP-L5v6sA4rW3GHeqFws7albyAIUqnfYMgCntYYxz73lduh3hO~X7hLOxnbBimSSJ8TYcy8nHmfdlUdZZFYsScmfZnQLhlaQSrHwXnvL548m8kSmOHkJfRVMQ8i81xDFNAL7KmskZsdBvz2ZgvUHBLekCNcUuTTMZudD5COQGNlD~vF~kLCEwVHDkVeWGqYF4v4RD4eZPWdWLXia63w__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/7138/poster/vertical/en/720.jpg?Expires=1769135342&Signature=bndaz65GcbbuSl65~S-RGgUrECqxDcnE-mxZXT5kG-XpjcGsX7rfn-xk2jLjlbwo-wvwWVHQpW1I3c5FhVklPogqZjMFy6vDJmlbUlYPg8xOJcAasrnM~XWkqLl0u6BKgpE0nx~hOTgBlYfYMLe5UppRp7gYwPRorZqSS4K~bZ4RpZ37Hak~CO3NbzbWABXXRB8LxAj14owpOELCXS5QpXpy488wZDEmcfr~YNr-wvLmW2LrhQqN0SNMBPnp4bHm6HcAXZew4SdFz52CAn2J8bdJmCCwRk6gOtFW6Xe2Vve9g4gYsgysmJEmEPkmmYiEnwSouOarjcS~PtaDIsmHyA__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/7138/poster/horizontal/en/360.jpg?Expires=1769135347&Signature=KwF4Egq5F3p15Lv4o27Pk-Jtu01-VqMQDlGpiKVXJA~npV2jMiAi6ymCFW6BSvY~3Ezkt5NX7ly3atSaoZnded1A-unJOnNFUuk9h8fpfwpbeUAVka6YtUCWKEZy~0Umnjp0vkluq9puHlCkbm8fZrALD8r3n6KfLt9z-9-n9nG2qjKaACkfjsv34SQ~aM~tX7M~TipERXlP2K9ZXKkiV6yFVEiHYYQGszN~CWPfKPIHRUfHcL1ozsLj-fT-n31iPFO47lU0lppNvXBv6NK8JKCDu0KLgf~DRCTIRKro42R75XXn5Tw86qVY2GvwO1BANPEA6Lw-fQy7EKUbz7a3iw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/7138/poster/horizontal/en/480.jpg?Expires=1769135347&Signature=RbhpNsscieI7~6pj4TDmM2TeVMqPbuZrX1KyJtaunnX1EpCYD-TF1dqAnDs0g2UC~Ius-uEjtU1Mgxj~eYs4zaucYaUDKEbjh~xiaQ6Llo5xY7go9un3tmcaddDXCCHAWsgi6~qRKHx1a6S7HZecyN3vV3IT2zGfQBMrvO2tR8TKMNCxSqzDnDtuIdoHnNT2sR3r6iAzwcHn3kLQyKvpnxBlhtQb3g0r-80glK-JwLPRRe247AGG0GnMiNLUCKz7oHo3Vy0M4koPEyy995ze3YAMyMnwtEE7JHk-7mBBBcoDLk2Poy8bzlhm2O1GP5Eq1cog3QpHUtobcFwiSaaUAg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/7138/poster/horizontal/en/720.jpg?Expires=1769135347&Signature=e9EveoU2Qqbhsd7rE5re5T~tz-jhL8C52GCUhlj1bbeSgXTkrk-oQWcVMjKhLpyd-U2SHmb0tW7xXhWuI19VPSLPCEEt~zfXPPV16tUZHKS0SLEpsS3DzgNcuP~KNKIlbuIbABwgdsu2C9LPL0POyvmrNiAHHnTQw1krmRhK4nE94KpzrLpguY2d6Wf3kRU9S2I1bOOvjpOzuCJ1FgSbPf3ei-qnxON1-koqxf9teI3znfO5aE7pgE9duN7CkauAkNgFZ~uQ2M~kTi2TLwCS6u10NQOztvgVjs8b7DGWF993LTv0u7HPu8zHEhaUwujrc-XfkjFSZUOIvO6vaUar3Q__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/7138/poster/horizontal/en/1080.jpg?Expires=1769135347&Signature=eSWCBtDKkuxk6cPB5zdUGq3u-UFppwoirGw8I~-l1rDCiIk7PAnyRJCnvqJyAhFGcjVFpLukv5sA3xy42VvVVLD2MDQfdnuNak8D0F7TgWz9SW-0ezysVHMqUKJG7vUgX1RTjsPOyZdK7t47wq2Kja8BQcid9Bn0w1vzBF6Hbj4utoXgJaXHfg1jUvi0UC58Q9-LZ~2DmHEDxZdQdgCv0lOqIhbDN6GgqovWO9f6vR2I7Xtxmwbj8DqhhCMXZ9BL9kc~FpeHeMaNdTJTd16lWj4fd2Gck0QGdwvy-0xg08pDPdjOsAY~1axEshBpvH7f09BQCi4eALeK2TlbdTRaeA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/7138/poster/horizontal/en/1440.jpg?Expires=1769135347&Signature=dGA3kIt0pK9vu8Rha6J4~rf30TXrOUiHg4cnAfyM7vCELVkMyMlEwUzf6G6xvKQiwTqN~hF8CBl~SaLH0Or-JIL8OkgFj8wPBTQLlZe57FvYaYOuhus8wsW5Olxe8ZAPHk0MxTgqf59oPQVSPFolLs1BynE9GIWoQIxSFGJB2ltkX9mJqLprv91-Fh7783JPGULOBOfD-xfgTQ~J8BW8e9Adw75R7kdXNeNINN5oDIdUdu0QFHIK-fPp1I8BBf4FUV3XKXGMrCVrwg9VbebHFhH5pzW0fSIUJvtS6EjyPVGEmuLnUg8QN7VjFQNj9~Z1krOWvbE6mPgGy-6e6oaNOg__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      verticalBackdrop: {
        w240: "https://cdn.movieofthenight.com/show/7138/backdrop/vertical/240.jpg?Expires=1769135332&Signature=HDTr0-TJEmPNgOofkkc~ncQ43hEeSSYy3b3Qtav7yLyOMEC5COCyuOu7B9wRY-E96tAU4AJrfnwDuI-FU~6S8Nhnl~LnghTtvm3XofPNfobJo3i2bN92QLokE9VUZfmKd6nj~PEulnQdFkZaclqnkAOZJN0MGvdnDjreCLkMw3wMOzmsKxcZqQUYqhb4A~Ctji2AbfJzacd8y0Nxpe6MzTN7ETTUWq5Z98zbOfVVKh7F6693Zjo8Q2hDduGZsA8T7qMH9-aka3uk9Hvq-x3gTLQVr8Xe75x3gZPrcT1Z0btf9uI7dqTOdSFWV3qT-2wDJuNTbyU6llu0ipu7kVX4vg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/7138/backdrop/vertical/360.jpg?Expires=1769135332&Signature=MSTAY5iBoESWoyiBOTMqY7DYT~V3jpHm5oZgnA0MeFyU-PkdnkMJpo8yELmDeIUVC6sI5E0DeUtB6REKzO1zYWSxQUX-UNuOQjPOF3XYlecohJa-QBJbpEBVt7AKkuXn9-XxpPVs7sxZ5PV-lfAYLEq-XfxbSAULWa7o0s6XryOQ~SmBN0IiDCguuiv0bfVxyreWopAoIJR0pEwf2-pLmOYJ1t566IvqMXa4Z8T-2EORPmtDPl2Y4bFdieyun2Qm0E3rnGoQyz920KZz4dlITkmhTCNGhLpEGJm50ZpcoFvpYGWKUhJeP5VCWyDBq9i5irV6f2ZE4wB0uRtvE1UdFQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/7138/backdrop/vertical/480.jpg?Expires=1769135332&Signature=JHg58T1bFCvKtW7yH46HpSV~N-nPlwffcMVMT2Npo9ufKr8lMX~9FdvQjZRqQon2PJblYtUv8JiovhhKa03bXQCUG-XiG26wMCB1InpcDNOQ6vHpF9P0Zia2LxOeDoHro6WluhlHTObterBVcXraBPXdkZRpIdptYCTDkHKZJJLm2uhgsiB318EEGYg7x-uKXUs8gCe2ySkP1YyrpHkob7ES7cixtr~U6QBj2oLmP6HDwAHason8XTKhgz8rhY3O2PFLU-TzhYpEqct5NHHLXUzzKETQqtPpKyCGYBSZR2fCFm7oC68jtrxwykKSBupL0NFphiiKAIVb-f1DDV84Dw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/7138/backdrop/vertical/600.jpg?Expires=1769135332&Signature=AYBeaNJvtd71CDsiPbiE0ZNPZ1B8osYT0Z~5-waNLODTiBFhvmRMsJ7qoSASUlT9F9E9ZF4Prdh48c1O5rgiqZhph6u--Y6vJc76do2rS8bdkp8qE29YoxNd~fh2XxERCBrHN-WVhJPdKLdBEAfh8S0YoXHOjhg2KzJ8Z2pSVY7l1K75Gw37YKw~JvwWyVSddipJcQOsNzOLgunM-11VvdSASTQnNXxBXUa5IJ8okV~qkJ4W2uNFQ15wyhlhoBbwRrMlURgclu~cnv6~MxTHuV84-sYVmuanVirZoXQ-gY7n12VpAVGk9AAfOfAW3IdVo2KolY8Wn-ooeV8qV9o2Bw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/7138/backdrop/vertical/720.jpg?Expires=1769135332&Signature=dilmZvnjxldvryUBHl5IrccQXBTbXTbXn7pRr7p5WjQxIx6v44kC8Uinlw2fcQDqwWcLxrWHQDrSQvRfBgQBkUi1gZPcfnavBwB7WMhsZcZddzzw-YBXqSRE6cv-LWO6hNeuE2oljoWWAR7b1XDodH-o7ER9VDhuv0l5zlxGYhfdn4MVibUzv7X3rPeE9QBwjWQ3ffuB59iBQQYokkx6lMxR7FCpqEG5h9hMs3duE8C2Mz2aE9kZ1XRA6RoPMZHcqJQRpNJp1ijGKEaD1K-dODt4dr3ASC9IAIvefmvRUn8kqBJ~XUlhafjFSI9yROgYHeptybZtbPlCM11HAsDg9w__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/7138/backdrop/horizontal/360.jpg?Expires=1769135338&Signature=YvNsO7VVuBAK8iyEWzvdgADlhSaAPS9Tyxih~MlBgmN7ZAXRHhjYC91XTnoToLz66LIYt96Lf3tmwAiyfhh6GPcYD3UbGchp2fsmq0XyzizonXEdfWZWQqPlV8KFupiHefSatTIrrID80a2GeNrkVA8nyxajGZ-Mi82000GM7yszxyjAmGlxaIYIWJuVr9RjaE6ng0gaQND8ZumMnvXM-lOkxrRmPBGIIhInQoLe8QhyQGtmillpZI25obyJKjMA~V9HSbbgYqSv~dk350xvSdXcNPdY1zcDTG69XITcCyRvEppblzSPNO2v8n9sXVl3bzIUe2SBBvKbjd4TeZHOnQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/7138/backdrop/horizontal/480.jpg?Expires=1769135338&Signature=AB2-vHnDGPuq0-RYcRyaYOB20Q2oJPTGXWyUj6no4pZgP-feS2DgtCZ2pnX-w5PIX6tNnfMKSS~2dUyumZJ4Mb76HrDo~K7rHJbBPonnp-v2x6gyGoz4DWE-EAWReQ2atjzQLb9hl9Cx6izBMDBX70D3A6VTXhZToAJbd2sSIHfr-IWxexNLhpINXwLV~9X6Gzx-a6Pf7g8cm2zyn2SCGtDiLw88yXGAYGRjYnS9bXiQpvg9Ep9Zii4dV5-7N4M8yMGZ3vNRxR5oPyR~HlYU8c3zXNWIlzZdhTPwoCChZZjLXOlBhtgekdVW1Fsqt8GaKWcCdK0-pTe3eIvrnMEt2Q__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/7138/backdrop/horizontal/720.jpg?Expires=1769135338&Signature=Vn-gPP0tBCj5YiMMv~SVYi~G9zMhyOOVZTxmQWG6AB0p~lBG49Cg4H1FH7oUNPcCmCQ97k1nUghCeUZaobDidJay3A8uSoWfY6gLiW6gOtkwsUDzgc6qHUcvZZFiO4X138ryUX8KVQCOZyJF3KwYqlDof~JQ3OsZ26In86M2032XUoLHC~WwQFfO3ZcFVixb1zC0CA9M6c6y5CJx5DNDGD~O3yQwVrTlVCdO9TNX~KgVEPfVpD6-T~k-~PS-TG20bMU--rIJ5JNkW8hweO-7riwKYXLUfxnUkv-zUSh-i2BC-fBmllDaW~VHyoifCDzojp4ZMYnzNf2N3RFLUpx8BA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/7138/backdrop/horizontal/1080.jpg?Expires=1769135338&Signature=SNzc0CdKzsLkfxDGec8pxiPXl5p4nltrPYzmwzEeE-KuYF~Nn2pugLSVCX8N3RGUMZuUKiMswNU~RY05OE6n8xrZ6dzEEzPWSxJMfaNdGP7keZMiid6lEjJe2CIQqDmlrE6YtpMYmgHUJ~BMrobALI5l10YpfbIF2I4VXO13BDfaP1beCFiObd8HZB9YzepRlviF8AS-jVw32DBch6icmZ3afNeRF7fARbKPhdL0laZv7rK9Irfb12SfK4vFQlQwPI1kAQMNKgZBATsZqhQRD4X4W-T4pgi88F2zgL0wq-4v6HDWGFJPFCuhqpkLUTQYhWsFyM0DdSMjwl-dfdVFZw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/7138/backdrop/horizontal/1440.jpg?Expires=1769135338&Signature=epAeaqUpGGUHRKfYr6nB44nKZIlo2ZDU8hJ3RffP0assPEXWezAi6oLpG4jq12-dupAXq6CqFvGsoyybHnHdEXLty6DfGpxPI6k-yBVzqjb79rtHfaXHkOfIXyuL3g0Wv~o1tINs9-li4TN0ST~IqUueQhaRs~~iYGksUmIO7tbjmwL1S1oTI4oah6uasSXITvdsGaOzU0kMragUSgKYUFa~E8CLoqlNoKbvbhaWQyDPHPNaeREi29aznoxIThpAebODtJqatM5eEYA2CIVaE9BI3FTER1yIq7nIs7dUbgc4I9he34JT2WlqRy8N9caDf1~bZZ08y9r~H00RDLXuxg__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://www.amazon.com/gp/video/detail/B01FIW8A2O/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "deu",
            },
            {
              language: "eng",
            },
            {
              language: "fra",
            },
            {
              language: "por",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "deu",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fin",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "fra",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "ita",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "nld",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "por",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "swe",
              },
            },
          ],
          price: {
            amount: "3.99",
            currency: "USD",
            formatted: "3.99 USD",
          },
          expiresSoon: false,
          availableSince: 1703957116,
        },
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://tv.apple.com/us/movie/batman-the-killing-joke/umc.cmc.4efmsfqnqellnld6nrlmc6ggt",
          quality: "uhd",
          audios: [
            {
              language: "eng",
              region: "USA",
            },
            {
              language: "fra",
              region: "FRA",
            },
            {
              language: "spa",
              region: "419",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "cmn",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "dan",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "deu",
                region: "DEU",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "eng",
                region: "USA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fin",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fra",
                region: "FRA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "hun",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ita",
                region: "ITA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "kor",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "nld",
                region: "NLD",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "nor",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "pol",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "por",
                region: "BRA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
                region: "419",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
                region: "ESP",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "swe",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "tha",
              },
            },
          ],
          price: {
            amount: "3.99",
            currency: "USD",
            formatted: "3.99 USD",
          },
          expiresSoon: false,
          availableSince: 1653915546,
        },
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://tv.apple.com/us/movie/batman-the-killing-joke/umc.cmc.4efmsfqnqellnld6nrlmc6ggt",
          quality: "uhd",
          audios: [
            {
              language: "eng",
              region: "USA",
            },
            {
              language: "fra",
              region: "FRA",
            },
            {
              language: "spa",
              region: "419",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "cmn",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "dan",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "deu",
                region: "DEU",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "eng",
                region: "USA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fin",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fra",
                region: "FRA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "hun",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ita",
                region: "ITA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "kor",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "nld",
                region: "NLD",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "nor",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "pol",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "por",
                region: "BRA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
                region: "419",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
                region: "ESP",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "swe",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "tha",
              },
            },
          ],
          price: {
            amount: "14.99",
            currency: "USD",
            formatted: "14.99 USD",
          },
          expiresSoon: false,
          availableSince: 1653915546,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B01FIW8A2O/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "deu",
            },
            {
              language: "eng",
            },
            {
              language: "fra",
            },
            {
              language: "por",
            },
            {
              language: "spa",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "deu",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fin",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "fra",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "ita",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "nld",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "por",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "spa",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "swe",
              },
            },
          ],
          price: {
            amount: "12.99",
            currency: "USD",
            formatted: "12.99 USD",
          },
          expiresSoon: false,
          availableSince: 1703957116,
        },
      ],
    },
  },
  {
    itemType: "show",
    showType: "movie",
    id: "68",
    imdbId: "tt0468569",
    tmdbId: "movie/155",
    title: "The Dark Knight",
    overview:
      "With the help of Lieutenant Jim Gordon and new district attorney Harvey Dent, Batman sets out to destroy organised crime in Gotham City forever; but they soon find themselves prey to a rising criminal mastermind known as The Joker.",
    releaseYear: 2008,
    originalTitle: "The Dark Knight",
    genres: [
      {
        id: "action",
        name: "Action",
      },
      {
        id: "crime",
        name: "Crime",
      },
      {
        id: "drama",
        name: "Drama",
      },
    ],
    directors: ["Christopher Nolan"],
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhaal",
      "Gary Oldman",
      "Morgan Freeman",
    ],
    rating: 87,
    runtime: 152,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/68/poster/vertical/en/240.jpg?Expires=1769132483&Signature=Aos5dInQ9XPjLFpSb8mBU7t2atU7STMgTVyBI7oqXNOWwNBg1WtceamVWUMaKkBXTJ6pVqHaoD2XCbofw59K6nTyLuFRJXciONqgzi7g0bHxdGQZMZh1fEF70UW6YFhMO74Hv7409nt5txHyfamTsHjzuEn7iu9BWH4owwPXHgGsiFdsl-FRIDCLeOB~yxA~bVwKbzSDw-vqz1G~-OjfOsngY4PvEFne671hpmVUP9P4FuCItd6ROp68A0l4GPF1R0g4rGHjvYhvtracieiXTerj57zlxg-lTSG4MVfhVpijy2qb7MdYAZpkB7ulYmVV5Jset1fCePzH5GCnRCssYw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/68/poster/vertical/en/360.jpg?Expires=1769132483&Signature=Qv-nvnOkmi-7DqI~H-yFIZTmkQzylqWLtWs9UdHqt-PO2ZlLHMDW5bz4MJloxBSBJrzAz62GCdrezVjNHIZxn9dD7xXuEW3S5l2F9IviJWeIjkqkLP4n3epdHKRCZF2m2tA9~zre9mFkcnAPI7NE2vLZ2o2nWrLxHFZxgWMgBLzemfts3eKiXav~Lhep3y8OtcaYhSJykaYg-HsSis3Q7ccHXRYswlk0ZuopuP5rZg1vX3URTrcgz0Vsxf~LuF~ylWccFapx4n845ml6MZsXqQme2cumHwk0TvsxOODaObs-pYYHWHDxcV61c4JTxDd0JKokvhbTHUABYr9ed0V-8A__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/68/poster/vertical/en/480.jpg?Expires=1769132483&Signature=NlXhTDuSKBzrQ7IyyeoqmLSdR8DdZGF655a~96kb4wQxEBJQ-CHbByYx9RYLee4r7Jf~50H-BJt-rCeGfZ95OxW~5GHQVQ2KKPib12gU4Ucl~Hv6PiOBVpOGNW25UF0L2leFovk3MuCzhRwYvlW~~4GTJNeTq7LxovxJ-Ay8yWGjOlUMFp2RttF~K-4xNlGJZ9bQuIBvQ4xw-AGy8ApRv2lRNy4oTVKnJXk9kPHLuaRFwP2B8d8WvIfZE3u-ucufd2bBQUpGI5PsU6CeNYFCdXsOaaWOlnL86im6Ykc9XIViWFpnaHG9stti04CjXwZJnNFlDd0Qrg20K0i4pIGOYw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/68/poster/vertical/en/600.jpg?Expires=1769132483&Signature=UMlZL5K0YjtRkdgT5J-1K7bkPLAJ~3eIJDCg-350Ph6Ow43w8A1Q8-~xRBLkBzwtEE~9t8rEO9Ut1kO2tFfiswXHckIhY89WzUGSJ6v3Af38KX~COrRx7xzHyyZCZCs-8qQkYSkJxVK3ApzcVdjEHJqUULyYYNSgfzi38PPV6TG0dv9QiS4ZJ5sAR4bArWX6dIdTU7fgSyPgkpmqyq0lvjGlZoXPADXhZkd-OwMPFqfW4MSI-VCaXvzRjXsEeA18eKvMZokJ23N-JJ0Y~bcrMLAQBrGLiPCV9hfZqk1RP0d78xLFNEY-MyG6HI7tFGmkzOD3kfLrCHIOuYFpI24xRg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/68/poster/vertical/en/720.jpg?Expires=1769132483&Signature=R6Cnst~SSAda-l8dN9Qw9WMqdi7ILkgNDn5E3kfIuzzyG16FZkH5buvD8O4YomXrKlL6WVIROw5HdJBIwQQ6q2RJ7fHF9HMYycX5L6ysj-lSrJ9vnb9OcPP8b~WBf-gmGSR5Q~lduluQVnCJELr1i8~hFx~Xks0XqSA9LdO5Fa4I2UIhiGPsvH~ajbB63LHH4g~euTWH4lzKpeAVk3-QfRZiLzFtcTtdLCvO6AqdLBLWHeSA3~wwQZi8yTbx0Eg8IGkDsm1ExGso~X6CXAdVk9YfMg-cNee-ZTjSysVWjpnqEXjwF1j3LyV6YCjp~lfdWbU6vqEx12nICzVcYX4qwQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/68/poster/horizontal/en/360.jpg?Expires=1769132487&Signature=NcM12cX1lelbXrWj4SMXWAadD1YMqRiSF-jTNwYIZdmZQZDb82FzGMW4MZwSr5YB-6N0zZkhHqIx9pwAbWYRbkBrDWxDIb5l-fwLU0YiFTvmQMoMSKyP3aUa827TlCjxeCTyShibROozV0PNjpf8sweHMX1KlBU2Pqp0HURlojRVxfoLvO5uH7DQezQsxoOtQJDhvaJ3fKe2GB4KHeYiIib9EH-~5BnUzPan08URTaUS0C48kCdqdug47dHmDdtgiW0lnxqE4oS33aCejDaovDrFgT5zckmvjJQEYaFHSqDr36RQupVcg8~nDtowwTkPMWkp1JOeFp6ZCipL3XhaSA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/68/poster/horizontal/en/480.jpg?Expires=1769132487&Signature=MdrvTl1FEJESYakKwAQDUP0Td0Hn~~iQyCzCLvoS5-f8oWexFA~wFHHDm0cmCksbC17ltAxaK46vd6Y6Fl-Mn0c-fVHSoDbywkeQWge-dUqp4S38iUjryiuO6dSvdWoTvJsXyeCdYSK3CrqSk07fO1nBrcrojSv~jgSjYlX307S10KFMFZ-h4yKEDhiUoXCBcJcaZqYN~JbUhZy-6yoXIX6ZPmSombcPYfgwXhq4VV-UNZ3tu6iuqTxNij5aZgorb8bLRUzCPPP1RbM6X4ogz~5hNKAofnd719~TJ2DVMhRgCKhpduBXCpseOEMF~y4nhMblK8tAwtSC-J1EvcuySA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/68/poster/horizontal/en/720.jpg?Expires=1769132487&Signature=X-vmRshrfKySRXoRFI4J8aV7spk4t~T4GfZhg0MgEElTvfF~~aIIw4rJluXhjCjUskkRcvXM3BJlqTyhVSV6bW1pn~hbqK0Vvz37BRYGVIrOfLW2yR1-mOiDtzDKB7n5tBcA6dFPL0H9dnAqd1322Eant~dmP3iOzH0zolSVVstw2g8L1W~vvB-Or-DSDdG-m5XFrQCgrQx4HUN64W~8Zfawdy-yqFpcibI0t3KmYUyrUC1WmMbub9Ey2-Q5hsLoNrgxIrYtkR2WGAmG8T9Z9RQSGWxUsCxaSVUFoFgsfLO5nb9g4OO329aMl76-U-EvhIKV4gv8VxvDq4S7T7SRMA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/68/poster/horizontal/en/1080.jpg?Expires=1769132487&Signature=lWxsrOgH1RZZASQ6VTc6m4VYY~wepkPzyoldad~KjeRh7I2KoEzWO3wX2eYi0apcz7Is95oR8Og7meFVYcrYEfd3dpOvbquVrM2~~BMbbyy0GXOA8QREJmMCVWxEKEYmssDVthtlNxdmI1i4VjRyfmOGCOGirXF1kIVvxaYCrKt7B0M7-ycrNH-~1V3Twvozw5tq0HRjZQnZBJZ0ZOb4LCYaZgfKJhOHQtUqkw66F4Tuzvl17IjpcoeXtOmmqsyreVvkylGF3R7mDRJTxe2pgXbNuG0YhL3XWDeyQ3WKAqhzmU~e4-xGz8ymlNP2~btOjP7tdYJJBMu5QTLp9Z7ZCg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/68/poster/horizontal/en/1440.jpg?Expires=1769132487&Signature=OfEUTzPITpzsdLDEW2qkZU7~4mooLH45FZ-1Sev8nAOMh1ZNK4fAQKxlAFG-sghYHMPCQJC9AR~05cOok4W7d~4XowkDVm0OIjXDqz5dIfaMV3AKCirg3EcPxowIxMcMdaMWHTe8JVRt627jWRQLIJaaWJkLhr0FevzINUY8IuudRl2Y5ldhMKsW9MFpnOfYcpaPV-6JIh6t2xGqMJwY8zQeuehKLW85XDS01QlG6rtWChSDX~AJwsWWKS-PsCcjUDXkJRX2QCofja88zEnn-W4rqUHGnkl3cShzNwpiGPfwF~nxi4l1JOTAvO1kQYrgF1IiyT2QS4JWwGfv1bzvmA__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      verticalBackdrop: {
        w240: "https://cdn.movieofthenight.com/show/68/backdrop/vertical/240.jpg?Expires=1769132477&Signature=jTju7IqcU1tbRctr~19ypjCBDhnI1W8UmkuC8B0BgHMDkxTu0mnVr76songqmw6PguYb22-rQwKxUYnSUdiRg5f69hZK2AzhQj5AehV32Lg~zIcroCmNdt0t1ZbV5Fxr3pl04qrwF~Zu3bdBFDoAVf6rl9VeAv-4ibp8vqpx-~ezT7wUvH9t72TPLa3I0QM6825MMlonKGpRefCqekujbRg94tW3tvMIwqOXEdKKtjLeSTaG6sD1NHAUoWYD2oUWa5~3XSUeuw9FQ~jy0VeKpNDxQPBj~klMRpXk2IyVG8s9-qEYIthVGTj93D1qkPtbEuhFwdYBJWG8QxcnyyoXBQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/68/backdrop/vertical/360.jpg?Expires=1769132477&Signature=fxnmwhpxVgqsKt~szGMqYUKbGNI8Hyw5ZFQVxfvx4SHDaMKu5uMpqZFfcKTxBxQh1ncvf5N3-Gw41WAPHMQYokSANUxiB3Lce9vzY-ycvBdheaYVkfbETx5oxv3lyBSGISVRYzxQTB9RLQ2CtloEx4RBAZTdLKRTZ2bBV4eBeEOJHveJSg1lo2J~zVp459S7YgY8s93dVru8amGXTx58hWAxnusog958NLGDBVxr3PwYUsKy2Y-TEbXyxG~byEXLF2wtXOoFokNjePaAaRIsXC4uHlb64FUvTp9kX-xdoeLwOM3zfCxM78MC7BXp20Jb2bRggSe4diLirfugsNQyDw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/68/backdrop/vertical/480.jpg?Expires=1769132477&Signature=FwcVH8B-RgmTPp0vGDtHh-TnhUISU7vdcL4m~~WffkZ7lJkWEw~9ZQkqieEKJQMXR-aGUqKLTftnK93dgwICk3DKL~QqQAGJycbjQSHGilSAQbQQQbV7pVCiHHwfm4cpW2dnc272FIN9aNEoy0CI2FvCTdKo46ffkKL23lACxUp0n9diYKyqK3h0yJKynQvo~DoX~Y3F9Dr4~Vk-Xv~ZfXlhspiE6b3bFj~wVF-MesmIEUwAHAAi4pIkw9ZgdY-hj-~P~0z7GQY9f4I~nmKqqElcQIqJhl2ErbjHsLqKuvSGmtb9XpSZITK~HiDUzbu125xi1xyUgAAI8WyVOS2mJA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/68/backdrop/vertical/600.jpg?Expires=1769132477&Signature=MLIzTCbxbm0ZQ9qMGSEZAAI8RikR15PY358Cbo2ccR~S2E938B-4nA~5D8lDSw1VaCIPI9UoXdk2xojwqSBcBKbONf6plXhkbqqTmCTNtYoYy~LPS02v0-MOSMtssH6OnJSzF5UrfyPNIhNSgqopMV3NJi8wTHyzqamPk0oIz19GKphcm5lZ4vLGiSfe9KmQX0DUYOFwe47ydt0jcXkSfhoJhNVG2M04DwXHB7n~iv8gTRSW6n5RgikTrTxOS03KCvo8YKDHqG6zJR~YXtwfp561tcWQyhXF7LxeDTcpvTdNyNisRmjvtijtAdBSw7isbu70hYIghr4GR1WOj3gWHA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/68/backdrop/vertical/720.jpg?Expires=1769132477&Signature=Yo3UtxynaQxErnCLQQc1BrCp4lsuamuQvVc~-MSKAA-NzAH2-K7sw9aT5vSj6~j5BEZtIF55979lMSZu5Tq0hhzh~wNxylbq0Zp8eFnZtYM3n56-jmAyx3gMrOqr1r2jqJA4Sq1PTWG9KvtgY5AoJ2kBTFHm7TnNfPY1wGyVd1l0tV6FWWztVQGPtF8i8XYzMamQ35YIa3bji7FTjSdYKlg377Pbq9vuVs5A6GQFVn2Qx4cpY4027~Ll-sw5cTXc5BY1XCe~bKwuPbHzqxz3aWGixlM8Vz~3kBASomoJgEbuLCvyqhJGcgpXjBLC73cknXnpiuTU-0MNnSyZlTm6pw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/68/backdrop/horizontal/360.jpg?Expires=1769132479&Signature=Dl8EfLNOA4Wx9cvjE41ejOCSou1lTarVtBEjYNkdA-BRp2ogsiFtKc97GhfHGUCF1plxdtrSltng8sEeCUZ52WJmrUOue0pWUod3WgG4q2kxnFfqNKvd7FPeVfKdpuvBFqG4T7mfy6eHrff5YQyvsW-~q64dhrjs2AlbTpGd5~kMKKD2MDqaA9SgR5Ubf2Wd5xt-LfTiIkbBmTMZZGRwpf~oFvrQNpS~ecgm0TM3KuAA3M4ek~v-5BSjBKtgfpNKXOwi8W2mSAgDfjP35jAGEGE4v-teQW0yQhSmQnG3jJa0sSrkefhCuyQHT7UoMbGLhxNUjZzYdPIW2yeyGcPJrg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/68/backdrop/horizontal/480.jpg?Expires=1769132479&Signature=Az8fpqKNo~yPyr2G8gycYdVr4UL2pu8bpt4TB4fSyWPZHFamogL8BfUYlig6sCWtGGw1EUBZM3EsM86G-5cSy8uFwBQzGT4QDNenInGl-R~attAoyUH9vfC18I07MQbIFNl1DuJEAji2Z3b-ASyHgDUP52Kuy36RXip~VXUewYWW3~Iu-WrKTJWjKdFEGDW9xeXaA1WBAuwqto2K0H7V5ae8YfpVjRBWCxfRsWOQyQVGvtKgzKq1f09zoKJ4YvEml-eFQunsoF974fzR0CvLhDXtjhGofS4ffTZtlAiuEBTJO~hmkZMAlZM9tK2b9rMhivB6Gm2qGzQh5pv1k04iKw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/68/backdrop/horizontal/720.jpg?Expires=1769132479&Signature=SbOxsyv3wNLOG00IUY1CwI1Ey84BHEiV2wx5uxp9vxlwilrFfnQ9b~HN1rqrW7OaX2-xKLzxMvJKijinX36Nb-HMNQ-FUm8g25JLQkkeq-eJLZJYNc5o7zz0Wst3p8wMprI-M-nfJ7vhgzJMvqbl0HZePFoc0rB8AMpRpIoGSpaRtrE62lwgQz0O~uSnCcZW~5I4bAw~hrhlJghb3yN5ISkomNxL3s5Tz2OBWE~A-AeR1P3f2nrRfAZh-p20TTKg61ffQ~qd~oif9vzeRqhsZN1P9qif7wM4mUXPb5~jvI63K9RnzgbUbZLX00U0ZqkDR8G5uzc1pDSnqJOeMdVNRw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/68/backdrop/horizontal/1080.jpg?Expires=1769132479&Signature=bv88sj3aWH-I1kEtRIu2o3yNMmEsLWqk13Sl7s0LbYVurKHUGHmLyhbCwjw59g47Co6NPBGQuS-sM5Bq5MIiSOs4vJcvkgfnYOM-1Cup871p8Bn3167kbXzPROhbqqY6AjMwKVMFZ1X3uLkeF5-QZFmMqG50bdzpImOYHreVoSDkMaeJ95KSSmQdCSQaFnxO6CAEgHZ5dDH-8ziTjibLaDTif3mQCmGF2lenZISCcvpud~hFst~C4rfOm9hnxrN76YRvE6tFpSdIe2DsgYqmcNiSVsMtHxcdXJ2i3hQA5eh5FtUP1xddNtMR7ZuLXVJqAD20lZTt5AQ1hbdS0MhwyA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/68/backdrop/horizontal/1440.jpg?Expires=1769132479&Signature=VYDShenYeZxTsD1a-10o5JUxO5rU-bBI~TO-DhsOqDpQk5R0BEXftnXhSgX9Q8jmrzYEXAgAtthm1~5NDvqsa2IPkxqatqb3V0te-sFO2Zj~uwEQ2dDgJYwXmFmTQVaxsPWKbU5i1-OztOH8hmzuZS~mIyia~4HhlgcyqEUwitZIC2fYcIInNysSOd6750y77E0puXIOCTiJ5gaWtcqQzQuO32oiNXtYKFTjHFoS9JorFlKJGMxirtlt69fgBL3rFPmQaj5oOB0iGQQVzKOFjdPSDmDeumZB8QWxAZsOX9g6ll4I9KLaBLlLnbbyJWD2lpaKd97VF3BN5kW0CL3r8Q__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "hbo",
            name: "Max",
            homePage: "https://play.max.com/",
            themeColorCode: "#002be7",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/hbo/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/hbo/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/hbo/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://play.max.com/movie/52217243-a137-45d6-9c6a-0dfab4633034",
          videoLink:
            "https://play.max.com/video/watch/46c5fcd3-9081-49e1-941f-5f31abd27f98/b6a82b24-bcfe-453d-9b9d-563a5ad02a99",
          quality: "uhd",
          audios: [
            {
              language: "ces",
            },
            {
              language: "eng",
            },
            {
              language: "fra",
            },
            {
              language: "hun",
            },
            {
              language: "ind",
            },
            {
              language: "msa",
            },
            {
              language: "por",
            },
            {
              language: "spa",
            },
            {
              language: "tha",
            },
          ],
          subtitles: [
            {
              closedCaptions: false,
              locale: {
                language: "bul",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ces",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "dan",
              },
            },
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fin",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "fra",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "hrv",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "hun",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ind",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "mkd",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "msa",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "nld",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "nor",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "por",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "ron",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "srp",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "swe",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "tgl",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "tha",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "zho",
              },
            },
          ],
          expiresSoon: true,
          expiresOn: 1735707540,
          availableSince: 1687879529,
        },
        {
          service: {
            id: "netflix",
            name: "Netflix",
            homePage: "https://www.netflix.com/",
            themeColorCode: "#E50914",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/netflix/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/netflix/logo-white.svg",
            },
          },
          type: "subscription",
          link: "https://www.netflix.com/title/70079583/",
          audios: [],
          subtitles: [],
          expiresSoon: false,
          availableSince: 1693809870,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://www.amazon.com/gp/video/detail/B001I189MQ/ref=atv_dp",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          price: {
            amount: "3.79",
            currency: "USD",
            formatted: "3.79 USD",
          },
          expiresSoon: false,
          availableSince: 1690130611,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B001I189MQ/ref=atv_dp",
          quality: "hd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          price: {
            amount: "7.99",
            currency: "USD",
            formatted: "7.99 USD",
          },
          expiresSoon: false,
          availableSince: 1690130611,
        },
      ],
    },
  },
  {
    itemType: "show",
    showType: "movie",
    id: "6632",
    imdbId: "tt1569923",
    tmdbId: "movie/40662",
    title: "Batman: Under the Red Hood",
    overview:
      "In Batman - Under the Red Hood, Batman faces his ultimate challenge as the mysterious Red Hood takes Gotham City by firestorm. One part vigilante, one part criminal kingpin, Red Hood begins cleaning up Gotham with the efficiency of Batman, but without following the same ethical code. Killing is an option. And when The Joker falls in the balance between the two, hard truths are revealed and old ...",
    releaseYear: 2010,
    originalTitle: "Batman: Under the Red Hood",
    genres: [
      {
        id: "action",
        name: "Action",
      },
      {
        id: "animation",
        name: "Animation",
      },
      {
        id: "crime",
        name: "Crime",
      },
    ],
    directors: ["Brandon Vietti"],
    cast: [
      "Bruce Greenwood",
      "Jensen Ackles",
      "Neil Patrick Harris",
      "Jason Isaacs",
      "John DiMaggio",
      "Wade Williams",
      "Carlos Alazraqui",
    ],
    rating: 78,
    runtime: 72,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/6632/poster/vertical/en/240.jpg?Expires=1769248246&Signature=WeO2ZRHMOF26YCHTaxEH8gPLYduumB3y7KwpEF4vuDDxeIkEA8Xa8ttnZwP2SXD1ySrmVBwguHUc~tp8GDl0UMqwRQqG7ZV~PC7edt7AnLhvNFBlxff9Qadeuyn22gLdSkJ8QLp~aLNLELe1UpQTpLDgXzuXZib~fN0puXSW9VToMwfYmCwaN4B~I2SmK3DmLLY81PTsEQQKSGzyD9HkKDCNO9NYcbJH9OZipivQB9MTIO4HwVDEauEBtdIJFgQnbW1XBpcnVugHS-OMTky8Vn~IJmFUZHjW5FD9agd13lx4pF-ESf2bKOzfJFSkxdzCeYvSJ0Awe4~FC35HvXplow__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/6632/poster/vertical/en/360.jpg?Expires=1769248246&Signature=LupCQJvkyJhlRGDtNgyV-Eo5MmQWFpPchk1~lAKHhcAO~H3tEg8EUvMDifil0ODI3fxDk8afqtrnzVdc1MIvoTyi6XKFcaHlqCssZWAJIF7tg74PskjXefXRc-8sPyDGFlK9EqRh3Dz7bhmugGlAHAj~UjDzeuXBENizaSVgLUn7yWBzBkBUAEz5MUKF93AH5J15BIG6LSjinavk9eMog29IRYrQLMlXRFz6PFYdDSaaUUt2EwB1toH6v5NpKaA5akWtSzFbWPoxJZP3mdUcoYVXOTEm3EldhbgnS3rJBTwR9KDYVM7B3qYLrmlHOjOReF5dvUutKqPU6z-4tn-o3w__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/6632/poster/vertical/en/480.jpg?Expires=1769248246&Signature=LrnbIyxQsluQ0vlawBigO2UhCBtSk-oVZR8zy9vFIxj~wQMgJTxdJ88~0LMaKNm-GMU2X8V8PGdUeVC2kJwx4Tq-shIGjPaUraj7oVTcU-hoG3iV5LmSPB2qq0vfcwXg0JSEwfhEuNOtY7hAszvxX1yPpfgvnGQm0Mp0-OAtLaWhYRcV-fMpevuQbRExQrNQNy9UAQ-fisLS376Dqh~~mybIoHzq1QbWN1lgvyHtKHltbOo6QsfwS0jlXyFUMGTQSvuCPwrKzmYRO1QPm-2zgzxzxdj7fgfhhcxjYDWamjOHn2g5gh~ZASQ0ECYFsF2wldklVPkIenvLVdCSlflMXA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/6632/poster/vertical/en/600.jpg?Expires=1769248246&Signature=U1OPecg9QyWWdBAwCWWG4yY-W7GaKdHcDVWg1VGSB5GiLtWC1Sekq-1IRlpsoRx0YZs-pF3QcbFEwhDQ2ds956Cxnle713~hwLiuWcDatGkOHNcUxFTJhv7S-HCdjrhRAn0uSt4D-DQRtT9aVbh27bBmEf8NB9r6o9K5l2uOdJHzyToO~0RlBaD3H~tHcZIFfoyMc5eX7X0MkRuv83-GngjzeIonWDTICWli38XZUre5dWoO~1bPK18Zep2HUldjoynLT9H5De6noSA3yxo4m0BjJLI-Ozqc-THLwFugGPTvpaltEZFE5W-3OQQBpDB-UGHONJ8LwiWh2f6v2Cgi~Q__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/6632/poster/vertical/en/720.jpg?Expires=1769248246&Signature=KgBitpFfO8~ZqwxzK2~iyrjC5j866Km87e4jslqj0I6ymg3YALIWXDiOQMApckLoPxOsMkVggzPNa6~NaEm5VfotXIRpNQUJVlqf0Yz~BMFsk7whaWajfdJTOQ94fJca2FcJQNkIoygZpSKTCrNxs76Ynugxb8rTtp5gC0zZYcNJQw4RRvm6o1LqsZVzkM-bfYIZJA08hNTwbDbMLPEiybg7qVfkSrqPw7PSrgN1jInvQole4LGUkQm7gdOpt0fpe0Ls-2qP67amARKJxzfbW6JOiZNdpHvZu9dzRYTAs5e0Grg4ZpU2FLy6UOsS~~vc3m3GQn7lfkIEZCseFdFvtA__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/6632/poster/horizontal/en/360.jpg?Expires=1769248252&Signature=MmHedh7EUtLwhYyQioZky8X25sYberxlLoE3TMEhImsEjqDE~tCdTfhKA9JbRIAMy1zj9biACki7ldmEIVXd9Lhy4aEbGu8DyIkNSrycO5raB0c9Ik2IviekhwzJeTvJwxgf0a5SNHaG5M33UOh2CST-HB0mJ4hheV1NOl4Lr2R54B7LoRAmPdCv9AdD~wjSwyzFp-jbaoJwGq0ZBq1VqgjtmeYECSi6yD~7JZrrSvOeNFPko6BPB5c~uRIC0iv49KLSG8vzXin~l30V9aYVzkS8LruIcWO4I-4hRTz4oa24Cipqjx~imwNYPTL8C5WhlNQ2iOQweOAIb5AkHHj6aA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/6632/poster/horizontal/en/480.jpg?Expires=1769248252&Signature=MPuXoH90EChKOCGDC7Cd-Tv2ADtNC7NJv37P~lpFqaGzwdsbm04fEvwYBwi4xiEaRMc-s3E~ZMwfE1p8RUELjMjggsjbaaQ9CKEer~wccVSK04aAOWL886X2hPANOp5jG3QksDLRpN8T-FZ-2GfreEb8TwdPPEdD4SMiYQow-e4c9sSbLsyWpjQrX9PEwc~HPZt83xXOmm72VD20hVf2~FR82Y8RVdYEVv1j-kQPK4-f1bgfWbOCgFUklugAn3bD6I7cAFUyg6enKmnQjYrFi4-u-nCgqgN~x4FA0l6K8Ohh8klmiLfsx76DZrCbsPaK83FUfjK0prOsdJxv8-QHcg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/6632/poster/horizontal/en/720.jpg?Expires=1769248252&Signature=TjwW4dayq-KEYy412OhQvg6fdVSUTJjJs818iX5IPbabH9YwSYMvGzImitWVJ~JpG37CpewvnqSimlJfj37Ud3SLTO9Z87cg2pQ060IXeL6MuspKjaalEV9YsAlUwD9wd9arvfrQ1J5F625p5fv9o2yXBvX2cBnI8X3VUoDTnlD5nb3sU-cIV5Lm6GAWPDg6afo1CzBeQ9~od~7gwed-rGrzlCAYTzvT1BbuWDnBpwVxei2aQmptXkrXcBR0Tl7QpY5AUXZL5p7h4Y3Zpxe-3YwPFqJcDXNPCsHeOEeSrsvi~KDxebXSr-eWrUIob8rK2m7chrC83aUgKitOY8C5fQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/6632/poster/horizontal/en/1080.jpg?Expires=1769248252&Signature=DDt-NrMaUH5S0XsR~jYItQM5ZV7GKC17c9nXv8-I4fYpCdTs5BdgGvgjhESkxdxuCiQsNIXdU44idpZn5WU5O~DgzBnM1TRh9xuq5-42FS~2J5Fuej5pQs3KqPoheFTq6cFpX0YyQ1sXtx8E81by4bXVyJSRDEJQq0mXjr7mXu~j8VjZPzoue3zmcxulCPf8gqP9zh74TMwJmbtllpSWkARsokcWAGXMlHQz8eUlkMFVtMc1PYK2Bl~-N20~SpuORFtYfmU4ykVMMOoMrcvc~WGh~3K7Wi4qCS6Jz6IRrCIeCjyB9YXhLFBXQ0DryreMP3hyW5tyVvrl1bQGYEgewQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/6632/poster/horizontal/en/1440.jpg?Expires=1769248252&Signature=Ky6N0lT~o32YFGc5MAHYU3Q1aKLCLdDaDRqIeyRVr7SX2evyZfWCx3o28muaLTkQy-kXhdLGuYKTnuYw1i-r2n4MdvtUvHBpurYsUJbJUfZKz5aqHmcESnv9DD0Zuv0mq4WlNeJu5B48I2I~y7E7uGg0A7jfi4i6AS-f0vINozAh7tWIPuNdQSQ7DtmEaQ2nOXa0TYZjdnns4QNrTAR8uMrbJmtPAErU9KCL0YiUeCoa-m0xM0qnu5BTipME7czPg5YazJVEZVLk2Xd62B8cs9IwXiSWYSxjPBh0Z5YlZ3uzvI30cabcj20CwZZ6vwf4QJNs9bx8cUabzmmjKcbPPw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      verticalBackdrop: {
        w240: "https://cdn.movieofthenight.com/show/6632/backdrop/vertical/240.jpg?Expires=1769248243&Signature=Zr~eyvwK6VewZ6viV-RP-Urzfp28PVYO4mHt-PnN8zE3VMGCZIgL2MAhNwV3yjnU~c3tWdNRUST8xmQYbMdKdcSkn9d5rX3a-GSGlXlx5d3IfrpG0VIdqVP0ClP9oRIHB9Ky1Gm8VhpW2LecRUuTU4zIa8iKse78LzGF33HeZn-xL3zPKAkF51caiIQbCBXUy1BEtXKJDdx4gW7MoXqHXoKZqN1LGLG8S5DIE4Yn~AsJfWJ1CDskcx1cS0SNJA8NSx1Pfb2RsikkXotiuO~KJn-11veEblEeZl3uJVRju0fD0WBwG~Nt5qhMH48HAAmHhCn8XH6xkTYTK6-IC4lv1g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/6632/backdrop/vertical/360.jpg?Expires=1769248243&Signature=EkFBYrsyQjMEx~rGEWURnOeIMMRO7U142SpMR-CX4dROX0OpKBgli8qT~XCOSnd8hiYBW6S3AKNAf58sYaxEQ6dBl~rdKgbSmB2f7C2Rq6C3OCFUaZ9Dsyx6d62v8pUyROYnsdxRBza~izcv7rQqQpqpJbIhtrue3lNAsG7CUD8iqDUgjBaozrkrB1hBoOMxeJH85-jAOecXEkYQaoylwN0GDLNEv7EkeFh6Cs-NCSzlw929nc8~PO1cw31-SObhkxy3YQnytfHILbI19trfXdRbX6DE2cMbbkJZZVwi1BPDwgSyjXsa5p60GvCCe6OMwr2Eb7txBdCtGOOP8WCFfA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/6632/backdrop/vertical/480.jpg?Expires=1769248243&Signature=Wxhf3UT1~5gPoPNaGRKiOYiHh2HVUYuwcW1CqnpBrMD4Arv75Z4CRXoM1CQ8QR1XBek0nTy6Whm13Px5lPs2e3CXSHiffbSfPyS~dfztWCtgr5VA0tl3yZTIbXoMor0C2HXNhkoEw6YeiSBRZ2slHFbCYLxIHYZMyRShB-7LbpD8~W8z4~iyHMaKRVHbF4pjVADcRcYUceVKQcYjXA88-T0LztKMX16L~qqEUt3pdJgpisfldnApr48jaoinPSdmA6KOMndR1KwDW~-ck3GPPngQWgXk~CfGbcN1af-sP9rKxU3gY5KS1vQWrxk3pJjZW4NJ51OKpFOdZiS9iSrZWg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/6632/backdrop/vertical/600.jpg?Expires=1769248243&Signature=HqKjfk3ej4sPFMZBaIgVSOSr2qAGPsYSEVd877Npk7tEtJHLinTJRKJJSOcVWMzFVtvSQg-H~0DBu39HI-LCLwRSjZXm0mcvAGWx79Jg0Tdnh8eNneCzq~7hM7a05tuCniU9Im9VmTF3U8IzNiAmaMHvpvuRlezysGCdcQbhsWARAZ2MLPWfnuSjL4pL1n3z08H~M0X9VGvm50k3dW6O5LjKjnUEfcKFxP65mXQ2PzFcoMPlUBo~r9zUTf4dPjyzQ6G6pu8hSOA2s6pM9IFxSlEr4WoATyXEZFOVQgS2EUFfFxLbAjK1wOBSrrwlQP8ZUlbbmdIkZ~pTf4SjyK0zhg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/6632/backdrop/vertical/720.jpg?Expires=1769248243&Signature=GwzlPL5RG6J7D-y-hUDnguk0ThqWulYkZgzhSpotNPP3IK4fQdeIL4AzzYHIMRjbxpfWJhii7ODs5jciXxlOxj7QDlD6eYhfJ6bFz0PI1GQvQezmsRmPc1wJPqZXIiJENRm5DKGMl9oFXEBFPN5C31DFS2oS-LXczjuMC5bMS5oJxgyihjWZjxjgiYTrJQiqveNyV8UcgG6TonUvinbubvIO2GoB1StkaFrOJqFsDwKwWjNlwn2J5UuBOB6jlvM16iNd84Bt7j-F6fMIIplT39i8M8kviyYaPe0Xb2ul0vLfobeGb3ksWtrNd7iG5oMvly8496RlwX7TNC7y5GHnGw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/6632/backdrop/horizontal/360.jpg?Expires=1769248243&Signature=YMpnDFwQoh~C8sMYcgR7YM6bdtT8Wgt3cQJhIrKNGmoncf2y~Vhw7HsiZYf0CWYYN-p7pz3-EROYWJdQpm5oVGwfNno1EYfhr1NrqMB0Jy3jB5YQgFKdBPVXHP2rdT1cFzX1uHr~d6Ffe7mGOIpdGlzb3N25CaTlalsZMSF1jOfKwaBgM4zXlPaWEq9kXfCy7cNGxqtH9W1jLZYy5wSzRbDb8vmIi55E8yUa1cFVD2VlV0p1hCQ~pBb2VrZssQvgpVUZvGQKod2967YXU9mJ6SPWu7bP4keivZDfqUqWiS6dUSuQFz6F9XAFG2oTAQJVSVemEuIV~2itmawAd5XBbQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/6632/backdrop/horizontal/480.jpg?Expires=1769248243&Signature=jMTn5mNG27O2xRjnrMTPsD~dh~dKnOXOgzeAHx5zRWGAXw5pBFZsFxJB5yFKDcfF4ev2FHvrsrh1FbKetEzk630mSSLwO4oDqnhipS10lLet7Sl8szdMZBglifbtzgW-dl4NB-Aqdk7d-qlgG55mnlKMd0KpwJyo~uhANW0swXORZ-MXmiGCUhfBLV07aymqRg2HuD~Uzbx0WLZ1LfWe67iDwXKYvRioN8SByp7mnihKvt1KOTjPolQ0cu8QoOP4U2wTyOuOdlf5vK1s9JZQCAxcND5uuVR9Uv1N-Rasy8srqd7g5Vs5HvFbgpmuzfoQifGtf5eg4CCxPnIW0tGknQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/6632/backdrop/horizontal/720.jpg?Expires=1769248243&Signature=B3Z--~T3huCZ-~twE-SUiCYtfcQo0~VasYUb6GNBE8spFseYc3BNeCB4oXVG~v0Dpywy-AQ2fXOnwN6nFG2yb7Kg9NsCHdqCBilvy~KETKyNyo6w3viLiWkrQI9yXVEskE-9Hcn4uF-st6tfuvWjTTsDdanTSWaGqNb0GIaWm5ICyM7uK8LJDjsI4fDVM8teYBOAd2JygkyDc3NGvP-rcOCPd7jy4NpTh9dzstiVxU9uQ2J3PTSJmEAlnD3VsSj3ovwR2mflobdGn2flTSr9w2p4XYvVI~AncVHTKmQkVHYNhRp6iiix9YM~D5iSm10q4CzbVXRQwDxDdLAt-0M9jg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/6632/backdrop/horizontal/1080.jpg?Expires=1769248243&Signature=lM2WVDHnWJIDlIYPlKKp0qprm7zlSoR7INgsaYjlHBBs20XwjrY2MaO~~j~D1zaY5vdMB2~7HtdHgNyxPtIhXlHVMP~BAB93HGOQYEC3g2AY6v98kD~R2VIFQgyjSELXec-cTUm7w0jZCHFRLRkOqSnFpRG6N69uUxfm6wte1Lit6JRVR~G2dOWdc0spHAMrqQuJpgdmxJRZZgQw4xM7~ZzErIKRvtVJa7hwMTW3WMuH5vZH8~gu5uJpzgwjvkMkRU2sVsHACe8RuaR5xnxjWacVgX-8AwoZtWeeS0m3IYeM24bWOxw3cYPS4LoSJmX~Xe36xDrYm-A1TyozlN6kFg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/6632/backdrop/horizontal/1440.jpg?Expires=1769248243&Signature=ZBYzRVDgF834gbMx8JZ29cp-eYAYFTxdAHKbMezBu0S7qwizCneoCPZv7yzPlGZgGsanduf7xbOM2b6TKkvG4NKKj-amzmF0awoBmsz2ICKwSxMYYSeR5500Cm2af91pF8GmCTJfC93ncFwphmHaF91rH-AwnxF-3HMnuFyntZU0NWcszge9x8QrpTX94MqgHeoq564jy6swFVJF~cskPrdLt9C2-MPxjDSdMG2e47IPQ2y3JpKzxnpn34eH-olFaEi8U0r1IMhx-hM4Wmjgo1QoNbq96mWT8iQSWWdKYAkRvDSFAML5ITH728k4iMRIpWZWPjazh-NfEvQidykTbg__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {},
  },
  {
    itemType: "show",
    showType: "movie",
    id: "14120",
    imdbId: "tt7451284",
    tmdbId: "movie/485942",
    title: "Batman Ninja",
    overview:
      "Batman and a cast of villains including The Joker are transported back in time to medieval Japan in this ground-breaking anime feature.",
    releaseYear: 2018,
    originalTitle: "ニンジャバットマン",
    genres: [
      {
        id: "action",
        name: "Action",
      },
      {
        id: "animation",
        name: "Animation",
      },
      {
        id: "scifi",
        name: "Science Fiction",
      },
    ],
    directors: ["Jumpei Mizusaki"],
    cast: [
      "Koichi Yamadera",
      "Wataru Takagi",
      "Rie Kugimiya",
      "Ai Kakuma",
      "Hochu Otsuka",
      "Daisuke Ono",
      "Akira Ishida",
    ],
    rating: 55,
    runtime: 85,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/14120/poster/vertical/en/240.jpg?Expires=1769183660&Signature=afT4v3EKjz0VHMx9M7K7VamFkdpnUctcf1hlurZJ80UVzCe4W49Ny1HcWCW5RlKUZzC~cnpaQ2qfcRMwhEZ~vO4LP~2GMUVMw0RPkmQda8evgScxV-AXbk8IioCGWC8hG3Eoi6uLmTHZXCg6cNnwVhuri1XUJC70bLhnmKl96eizI03b02PQUD0nunPqBMnuQ510BpszoR3DLN3dFu37Itpn66l1hPHHSZIy~fAAnH3ax-FkiyorLlmBl~vxK7~WU8baf9058pq1SjHhTPjQTMhq1BgDZLkN4KKByHDCnC6yJ-uQeob8nD67WIocWU24UbGq534u2DGmz8PzyBwtbA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/14120/poster/vertical/en/360.jpg?Expires=1769183660&Signature=cyIV7bJx3nhPXiPGQXf9Xg3kAqJu7MIb9BroZQfDHgZMz-DxYMrRYoolD-vdP3lS5vVW2fQp69Lgg9pm8dBfAFVlBr3td8ffx8cxI50MSJqwmrRoyXjH8-hLNK2zXt69lkf0UKK9ViPcXZdZPUtSyfuGJfS5EcWgzeJSvpcxH~msoGpo51hXv65O5tjbWTM2plMj8yeanhcCyfd1hea~txDOvTBfjgwhSW8-d3a4i5tzmiWY-WCxGVG3uwuvsVxZ~EsMpj0Gvn2idY63H-f8tvVJ~eezcKa~WN~zBoWRSRBQVX5PLpT~KpYGxnUSfcrdhxatqNuubGjWi1Z9TO7KEA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/14120/poster/vertical/en/480.jpg?Expires=1769183660&Signature=BpIIuspKoCKHgDcOOjrs-OOKM2RzdkQBZprAR-quriAHsrq08q3WC16umY8ImRrEpC67Yn175xFBNMSnauFW-Kj1-RUSsqG0tZh4V~FlA4SIWGCicvwgq70OgkVByzNquk2OjpzZ02as7y3LpkxPgraeZtElCWLmxTyRH07bms1BZ4G6u~36dyGvkP4LV1ngCpsgXjGgUKOmNd~8JJznt3jI3lSE3qM6KH0B~PK5VBPg2~3hlVnO69WGHW~-WQHsjxFmLoM4XGE5SEgxMw7egdPnsPeUHUSPwtTjAs7icc8WgsKIi4kKgJEhqL7Bw5JzHEcPXZDPu6adyTLpausZKA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/14120/poster/vertical/en/600.jpg?Expires=1769183660&Signature=kEOCXmEggE7CzmDLGAvYx0K06pKKpoQYSvX8GLp9Tq6xlbidyPCrNkWAA1BHQwWvsbg9jJgq1zLhjkPdQOI4-49UC3f3QTIII3VGryPm2nDe1ORO2imHVkNShvRlFzSHrBmamqepIRmVDeZwEHFtkUxCoqNeJuOtz-BjXjNTq2UuINC58tZSq~DU5lShxl1i9f52Yjx9mPXZRRCH08AqjaI2gzoKcu7p-1noschGcRT7z-cLwGMcPdoRkzjY-FlTzSLiwDaV-pA93f7jBL5xsmtrIK4mvZJh99xF4H3KwbsUJNn-438CAjvUaO9F~mUBnirUOeA0kUPr7kEaXhoU5g__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/14120/poster/vertical/en/720.jpg?Expires=1769183660&Signature=P5d6uC0Y~MHxPZFaX8QGB6fWuNz~9dsYBE2IwLSP7u6Uw-T7CEbQPhzDFJ4nTHdoYNdViqaJkmne67DAvSWl0hajvTls2m9lsexVTi5Rysr2QrnLhqbVnQhfF~e3n9QnVsWwlCjH14vzrzHo99BiCftFlM0Q~52SeQ7wDfcM6LYC3k-29moTUyzZ4EGYPT8WytVUArQzLTsZ2c37nBwz5qPDMW-TOaVgN~St7OHYI9XQQopr9d6x7LoAGO8P7C26k3b27EUTL4SZAPt23HQj9LM5NTT-7VJUh3Eci9xgBeOcScbEfyV21BDsEvSF4EYmHTdRgEOUn-LooiAYn-VllA__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/14120/poster/horizontal/en/360.jpg?Expires=1769183665&Signature=QyUD0oTQ2gXPfBqYRbbjuPH5uk6RIwVXU3yTJ8RejdIRO1gqtyRqjwl0ULlpDKRGcSXUDZGqWe82UkSU~4q22fp9LXR~WN6~tvr8gCl-WFrLNY4XUEFo5CxVq-lGYKqGvrrgSRFtoGxp5PFYktHZCu4VitKqiTsjnVdrOkQqaZ9dwH-U7Bc7IpXdODbEAhb4J6OEateU4N1g6rJjalcS9C54kSeg-V6xn7y7foqLJqtYNgj9RWgjjuePdUEaHSzXgeZVjfcKcQxnTVS4iQI36-7pFdkkKrgeW~Dmx~RbTdiP8Ig4HUtTmBN7JxtvWMGyUSB22Up64hUYkgTJ7PE4MQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/14120/poster/horizontal/en/480.jpg?Expires=1769183665&Signature=Wy4nHXZmNrMZjfhRMvzzfii1UQ171fp7yDqQmJ-oA5fG8tMhClSdvMkfJgh4LDmfmWQggn3GcJrBvTIZxM3wwU4WoI499Sy5LCk~0h0Cetq0Q8yzQ6-b2EKV1N~6GbVdkfeVx0V-iCZI7PQVYj-BDi8orOhZq4LmkhPeRK4Q4SspKuP5jT0F5g~-7v8RmaQNMJ4wJxpfezIr6rAQZwYAF0r5JTs93WJx0rIzJz~VDtxto-EiZjkue3i~HsjRZ39tnyPWJO21URUsyQ18dkdfkv58LhmIvNR3Umi0hrV3oxwpbxmp5eW~FSZhHrFh0sYKwxDKOGO5w0EtAQe3hSH8xQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/14120/poster/horizontal/en/720.jpg?Expires=1769183665&Signature=gC9u5W5WZMpSXpD566tj6fcffoKmF~UitkaPTwbwHIHxPAZiHQFEG1X9D76G3oZli03ibrGNaazl4QUJjrz77cfi2n3ZqUPzpvGdvpu-m0xLGx7FMRnddePfYH8ZX9~4cfal6gmJzI6vlxuoNmYHXdxytl0xHywPhrKqMQHiwCqazbdPjoE1CMOlkBnFuqijCsMihuF51qLcM9He~fJhZOPybK1BT4GWR112snBjsjxUu~M8q6V3H9~eSFKMyf0aBO5FDkFXCowT7CgUW2C6GzQtbJdykB6tah5qHGW72f2YT0fIygZ~9XONAJBu75MlWE934HTzJL3khP4kNS1Hjg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/14120/poster/horizontal/en/1080.jpg?Expires=1769183665&Signature=HtHdgIVeWNGe5p8~XAnqcJUQu6s~6e7iKVMA1Ixs6w7M~2dYzqqYurFvS6j63nII9inZZ0YNS~HqxVLsWcg2Xi-Go4hlU5Bkz0AFj-dvPqwvmiOYJ~XMtHYKE1wq7XMdnr9relOSk-wkyr0IqFHWJmyukYsS5CDb8Glae8G1w4z0TikVWijjLq7m~tLqoWG~UHZ6OgOpZDbcOjnVtIUXcARMf2cJfHiZmPn~gPS-q1oQEY1G1iYzT~QXtDGGloxl5RMAYFkUjpmFuij40v0mYI8pYG5cdNw9n1ACzryRwbtYD7x5O9ob3To2xLOQ4-v4hgfJ0puZCEheb5EPRfxu8w__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/14120/poster/horizontal/en/1440.jpg?Expires=1769183665&Signature=MRB7R-JEw7aan~l-EtWC5mo2e3oZJMyzBEYo7xhDL~-lplhetjAQuaJEtR3lGKikoYGD9PzrwaAJHaLEeuFr1Ju2sePogRIY3WcFdqdq97Nh36muGmicKTKu-lPyzsbte3sO0LE4vEojPCoBlk367cCuh~SWIrmsj7KPnHVD0WzGDiChUXTOgnYfAiGsRMFnF070vndT3lNb4zHYr0Zxie41inDT~2t82cn433B9oro4ur3Qeys2~cdf4nHl6QXTKU6ywkW0~BBeDO3Z7gPfiJ38wR~kRQyhkHrxZdZfY6XptVslcSQPGr~1Pxexc-Z6pqrYRWg1Rz9Emhh3NL0biw__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      verticalBackdrop: {
        w240: "https://cdn.movieofthenight.com/show/14120/backdrop/vertical/240.jpg?Expires=1769183657&Signature=WLyizWFV51KtXOsDxUfH7AP0iCHrDKdIYArOvLmm6iKDwko3cCblnfvJSJKbXbmaraziHrwFKQin~tovdvuTWhyLnPc1NyJEgf2V~eAQZO8NtnyDI0vEOE~9iaCh1AuOesUKu6JXp3zb5tKAD7rVJwQ13HfClVaLZlJN2ZBIrAiHusdomicJoyLRp8y4WBD6puetjICj5Aj~bc0D-E7BuL5BIRUJaNmpq2zTi8uPH5siJD1Cf6o8XsYjFzap2~AbCDA43aKJ9VjynrGRahPfFXCzh7HjB9WqNR2bYXjKxoeobcSraSNoRM4TwrhxAeJUaMjWDHWjELBkBEtEkEiEWw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/14120/backdrop/vertical/360.jpg?Expires=1769183657&Signature=UOZl4JUv44wna~rW4xC3kvbVp2UdmIBFkeDKQj0Mxs~NNmQjLccSL-~dex21iILMpFjzB6hGq4FELZmdcGyn6rI9aMO7pycLB-wVeKnjVJLyQRlkxvbtdz6adilqwBqRBTqDv61a06H0Di7TiPeS0wo2K93q3IfSUzngalTsJl1vEGjPv9UcimRg7~8GqSxebmBOY41~~URIkiFrNsPv3G5EuR5S~CAp4-cj-U8FykFhIr8MWwqijsIeK9NZv9nST7N9fezOBaMEM24R-LeTp8xBecvbP4H24Xj-98qcYWmJbWbUDswtZHzpJ64InJE6a5fjKhzb31jZF0oFfBLJKA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/14120/backdrop/vertical/480.jpg?Expires=1769183657&Signature=fhek7UGe6i9YKEukML32DL~6RlLPGdOrAcX200YnJjN33gtXznDPah4as4Vl1kjKRjy5yAWZhbHu1aDim7bRzxzyZPln4zQ-nckharg1qEf~UyiKcXyHKDzaqFVgMoiDkK7Opj-0W-1phEPy3z5iiAbP291UBelEIGfQn4uIbM3nCLtkUPqKv488QYmTx8ac3RvjFrlmWz-FJaJP~VIFcdIfKI8d3A8GtZ6ytsaMxhAN5TydfQ2akWcBO7HlCVUrMEd-D0VCutBFxrnkdfCLrlZTWIVmInQcUPmdeDMFVHUH4iBtGYwPfGgPodV8F0WF9ZTR4MXaRY4Hy8Ow1sur6Q__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/14120/backdrop/vertical/600.jpg?Expires=1769183657&Signature=Fnqcx-2hHU9fn1HG1gt8spuxO8aH0FLS49VJWGT~YmrRVD3zvfl5w2uTLEEBwxodNm~kJfowJdw-jt127LyOc4pxCG6p3MMzZg59cScTxZyUgWfd2oqvfzsnLiIgZyz8RX1AsURrS6arOdtTiUSo641NGBaobvQoRZcXrGEvzqEpChm57i4Bo-izcRt2qTbjPa7YOrbLHzslFhhOV5s8185j-D9~ih-brkUuUYVv5nK7pub10E9KBufXEzHgwQ-nu1z0YZGi4PCMs2cEtdInSJvHpnyLwrK5LqFwXY8VAJUKuBxDznBh~zV7Q8OCUj0-fK27Jfy0swx3oZKu6Q0lFw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/14120/backdrop/vertical/720.jpg?Expires=1769183657&Signature=bGNZbx53myTQ9L6CrEO~MxyolLo6M-02lk5sxZG1vbRzL7MO-JL~spWIjFzRS-BMBNRc2MRs0U7ZCzyymQijgB5ZAmp9WaflnGXWvxPCrovpNKH0aVCo6CleUFq6Y5ocWZ8elXXbrfgPTq0Hp9SieLw7973rtMShqEHuM29zJbuXDGwcrBUtF9pzngHEwiZN8hb6Pp17HbMmqfh0DDzCap1BDwLQM~Dc21RYO0AT7R675cTkNHqrtPpW~OJnC0obWbN40VTae8BD7UjtiydHiUKBYjfn-9YY3Rpq26TRQ6He7beEKaI66USjlas7PgOitfGMmJIiZBqGnfe-T-KTxQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/14120/backdrop/horizontal/360.jpg?Expires=1769183657&Signature=W5CbtE85AvHOr4kdKYx420oGqSFIoM6dfwB8xzFWwBWd7HABYt8MpbkILvkll5772QxtLUTMKFMxdFeK7EloBp8D3qWnOV1q6iajM07~ft~NqbZzoedDP36rcb64nC6MJsPTy1mB06uUUUpEuAzJv9rHrLJmV9-GaoduSm53-CpIzNgacNkhM2t06J8U4PB6ZVJxbM-0~ejokauJnPG2by-wc03dZ341qMtIIKU-dcOdUpbeDEc~M-3T1G-x4N44-3a1sHS2lNPoCM-jn2gQfHmt5kalvU-mNTNn5e9XXLNKevvXP~gX8lBwmKGT0pN4yMgtxu015cHe8dQiIv6bWw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/14120/backdrop/horizontal/480.jpg?Expires=1769183657&Signature=J94gi0T4XblQ6yRBOq4t-6ywXmwlwFZ6DrmjCkwvz~q8vFC32vLDj4j227cVvMXevTE~-ixfrW7H01yFBx1ljVneRU4sHyNcvH1eWOu7wclwH142a4PiQjwurFUv5G8XttBJchNmwpoHkpkjX-JSHNysPgRQ36ilEtUssYazSpvHOem~YQBioKS6mJtxlbzQ~jPjg2WBKEtus2IuqyevyXCcvAYZCtc11xNHpnoNGpBKdjCLH4XcWjma6Jh1xEk1uQKrPgc0wbV~VKJlSP1Vcc7xKoZ3RmBMy3AeckDxD4hpXmt00ZALWy0kdwAtA83MABa0mNhimqTb2ETNNcqK2w__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/14120/backdrop/horizontal/720.jpg?Expires=1769183657&Signature=UoH3mZAyqvOrGW1FhiG1uPkzKarc0aqJ~gTk~so~6UzbCiuY1C3~hr3aD7GQkZQD68svyTGxFnwYM66VxZik7~64-iATqz~VqsHWbMTIYaft8b5vZP-A9tX4YO2K49umPCBVanAT4AmX~RN8tXKHuwKBmm-qd4zb0tpnySDI0563E-Re35sEm03hujVQxhqCj1Dma4Sj6kXnLfeSBxogUNZZzJZF4MJsrtO5i9xQj4RAD5hoe5pZHT8A4xl07S1-reToFd9MFuO8RNimBp17Ve6zJtTXIVQHekxmTo9SQG4yGtQCwOhZ3gdqpfPF-bcDfxJQVgra8uxAjVZTWtGYcQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/14120/backdrop/horizontal/1080.jpg?Expires=1769183657&Signature=iFegejr7tczf~B7h8tCOLNw~iilC7-juBuBmgBrU0T20Emxhlj-7Hqjxhcps69CegckD8vVxiMgxQuYV-7vZmIaiuwc9sh2RBMOILGrybVMfKDQ~oLK43dL41UMsTmvzoxqBWhMtb8Vj9J0k9k8m3hgxXIgreaRyrjgQLPtkMs84~qUEE3wWTtZznHok9tgdUDTAEtkBJ1rkCeZo7mcYIHBKLvvn4vL-NcjcRh1OZPgkmmSlBXNq-ncN2V90GSqinBhrQhl6fDyZew7YxVbcm5OvvG6z7F4W4quKTAc484r2~GOk1nWb7c7VguYn6XXyZdsX3BPLc4mh4Wy9BS7ESQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/14120/backdrop/horizontal/1440.jpg?Expires=1769183657&Signature=EgfU24CyQFHsBBrgNjLO44RaJHpOaiL5t2l9nngsMpmHBLwD90CRWm3gO~dOt7qqzI4z7Nst6FaEcQcKMlxhPgfOOfEobf3V8FKkekkWJBR4-Zvj5vVJMI-RN5PgWNtbZQGhlJ0yzGFfRQXsc7c9Nvgh0~I65GYv6VgLhQoNdZH25IecENWx8mkEJUDQg-DUNGPANF8q6-VC~XkQxe4JqSJ~rxl3RK5WGyP5mLOAaMqC44PBRcHXbZmQLpuCiOaJJtX2un5PQnrPC3VxNnt~6ElLV8sSVjIki9ItoHy8OG1K-sFyXGJV0Kve7GYbGfIGl9hK0-xABxpv9Mfd0ErNRg__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "tvs.sbd.1000566",
            name: "Max",
            homePage: "https://tv.apple.com/us/channel/max/tvs.sbd.1000566",
            themeColorCode: "#002BE7",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/us/addons/tvs.sbd.1000566/light-theme.png",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/us/addons/tvs.sbd.1000566/dark-theme.png",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/us/addons/tvs.sbd.1000566/white.png",
            },
          },
          link: "https://tv.apple.com/us/movie/batman-ninja/umc.cmc.n5o95ddax6k2zvt6wautiikk",
          quality: "hd",
          audios: [],
          subtitles: [],
          expiresSoon: false,
          availableSince: 1704322030,
        },
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "addon",
          addon: {
            id: "tvs.sbd.12962",
            name: "Prime Video",
            homePage:
              "https://tv.apple.com/us/channel/prime-video/tvs.sbd.12962",
            themeColorCode: "#1a98FF",
            imageSet: {
              lightThemeImage: "",
              darkThemeImage: "",
              whiteImage: "",
            },
          },
          link: "https://tv.apple.com/us/movie/batman-ninja/umc.cmc.n5o95ddax6k2zvt6wautiikk",
          quality: "hd",
          audios: [],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
                region: "USA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "por",
                region: "BRA",
              },
            },
            {
              closedCaptions: false,
              locale: {
                language: "spa",
                region: "419",
              },
            },
          ],
          expiresSoon: false,
          availableSince: 1704322030,
        },
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://tv.apple.com/us/movie/batman-ninja/umc.cmc.n5o95ddax6k2zvt6wautiikk?playableId=tvs.sbd.9001%3A1351527622",
          quality: "hd",
          audios: [],
          subtitles: [],
          price: {
            amount: "3.99",
            currency: "USD",
            formatted: "3.99 USD",
          },
          expiresSoon: false,
          availableSince: 1704322030,
        },
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://tv.apple.com/us/movie/batman-ninja/umc.cmc.n5o95ddax6k2zvt6wautiikk?playableId=tvs.sbd.9001%3A1351527622",
          quality: "hd",
          audios: [],
          subtitles: [],
          price: {
            amount: "6.99",
            currency: "USD",
            formatted: "6.99 USD",
          },
          expiresSoon: false,
          availableSince: 1704322030,
        },
      ],
    },
  },
  {
    itemType: "show",
    showType: "movie",
    id: "14386",
    imdbId: "tt8752440",
    tmdbId: "movie/537056",
    title: "Batman: Hush",
    overview:
      "When threads from Batman’s past begin to unravel, the race is on for him to crack Hush’s deadly game.",
    releaseYear: 2019,
    originalTitle: "Batman: Hush",
    genres: [
      {
        id: "action",
        name: "Action",
      },
      {
        id: "adventure",
        name: "Adventure",
      },
      {
        id: "animation",
        name: "Animation",
      },
    ],
    directors: ["Justin Copeland"],
    cast: [
      "Jason O'Mara",
      "Jennifer Morrison",
      "Maury Sterling",
      "Sean Maher",
      "Geoffrey Arend",
      "James Garrett",
      "Jerry O'Connell",
    ],
    rating: 68,
    runtime: 82,
    imageSet: {
      verticalPoster: {
        w240: "https://cdn.movieofthenight.com/show/14386/poster/vertical/en/240.jpg?Expires=1769189130&Signature=bGNMI~HwPwEw-02tLJiNZe6k-QzcyA0yDYzghgpjg79hbxUoGZA6tLqHv7l1cdGqhoxSv0NacxtuTxChnxBQa-lSj2pLHIKeZAgnkilzX1QXSPRQVNx4ryzU3Rg-0IK5yxpuxFlkvysG6PnRmkWRJw9MVSV~EmZ2yjt8Q6G7qqbwb8knwxxSJv6GkSbeCW44nYSch2LzCE1QcaC9BRgK7c7LDaVXzr393xOWj-EqZ29RtMwCODrfUlRogM~oxQJUgKbZIOBamJUYF2JQ2feR3o0UpcGO9cYvB1ijuS7Rh2nG7-6sIPq-G0eUsVASmz23I0pgJY3wVmt1GDRa1MF5HA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/14386/poster/vertical/en/360.jpg?Expires=1769189130&Signature=C1gxzJPAxiU~MiilWzwhhLa2~pWfpSfZFldffCH5n4XsJIXK5BxzQgpNL-h7-t93wZweVgWHaoOABRu2FC83JfRiU07ccS29CDY745E3qYkL55dv690jRxV-Bg34uGIMmFs1MZH4wOZtYiVFb~iyWXTaW~2v4Gc4~7l0em9AkVp8XvU~kUgHjRWwxEdZ1r85aHMiDk3wuicSNuc7Cn13My-OjkEGsk3~7cyCfSByeowYtIVNQDtP33DWGSh7oBbaWL5bF15JrzkJK2Sz3t0IJYGHIIbIcmlhT8TFUdiFssw3peqWBGu10olSRCLlyhruOt0x3HOkg9MCPMRAWp3JQw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/14386/poster/vertical/en/480.jpg?Expires=1769189130&Signature=JEdctNIKjLMFcTvtBQqsaRNH6~b~vYoKyPZpGPev--gejbOFSbcl-dZbfMQyugLhP6xZDYIe7ECzlX~pE-ycukyb9ya5X2GBW9VY0G64dnKp5VA7w363Qcc61L19QinEu0scFcgh6Df3AysTcd0Ma3gv7oZ0RBd7w~Q5m-UWDAyvJi75-E93MXbHfZXEXwCbqpgo7dCJiSIbh2n1f2~Fv6GnQuIdw~s4ImbTQ0HoH6TuxqJukxK2tNrD7UP~WOPZ73yMuLVRjCOd7y8~C9pZiFOH2pYpivy~jwmi1ojDwJBOgUEHP0pNd6tabfldt8rZTgcOHLZCJtiL2RE3kP6o9w__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/14386/poster/vertical/en/600.jpg?Expires=1769189130&Signature=juhpndConm5nffPeRwE9IT2l7UbB-u~KQR7iz4yw~30csPQB8nGSDLI-J42eGV-KZQys6bQHFVx6~ueC~Mu3xsoYtihXYsBf-AGst4xek5RtnvBlqh~liBvnOIfzGZKdtSeLmBXJrSGu7wet0R9bREu2xLF4lu6kXgbk3hYmeikcijQKcewVY9CltpSS5ttivwNI76BH~LsTbBrz9v9Or54NFyimLJXuo1jai5pG2gvEZOBGT8KCuCe5hMnaBB3OXuVj4LNgYjLcy8VDqSN~bc54BNCHcVXJKIe6uCFO2FQ0kB~Q3~CKC1uNmn0aidB70VNmWkKQzHSb4GHWqZRr6w__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/14386/poster/vertical/en/720.jpg?Expires=1769189130&Signature=XwQbtr101PCQ8jemF0zvWwsySNbCESREVKTQGRhiN6UqAGP1LXiVCoGS5W5Xea51t-KtJ9vX0CTnSw3dS1xsAfet6bYwpq~o2YHdrs0lgiYa7rhAOWfoXWzYWTvmTqevN6mlH0uar5uUajFSg03ESZRo0oVSKS6N~rFetZOHputn76zADRit5r4enpn4xJIlWmYOtm4CXjqPd3s40pcyeyEntHaGm~NyMZSw7M0On2CUyCMeoTk1m45JARnVVjL7Ntt0QI70mJogElh8J~p4GMM2SW28eRIDTXcJNNxKNql59zyxHnRU36W48AujegNY5iTECw~vMbltv44pekulGQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalPoster: {
        w360: "https://cdn.movieofthenight.com/show/14386/poster/horizontal/en/360.jpg?Expires=1769189135&Signature=XUjPOxL5CPdwasmtuzYDeToy6WDAL3FMOUQEqOoJRuzMwFkVIgxEwFu2vbiFQE~IM4Kkmr3zAO3t3l28IgfjZTBWYE2sCXdb3l889Fr~iiuwk67WrkX-T4V5ZnmF2ZTzQm~URo7bcWQ41-9LywplL4iJKJ-5HV3fU5Sy4EF6HwhV3pcUwVFkwWsp2uKykb~KIkSpeDHAJmRuA8Jrdz7SaWKVLEOUU-kZAY4UkHuIffWBYQwuzB755p3dCoCC8dFJcHhPYJw0CCOMYWzHc~0tUatQb8S29JiGC8A5tG-CwUiEARkwuKS~FwW3~rPlsLDboIlGvpSNbW6LPg36gFJ2tw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/14386/poster/horizontal/en/480.jpg?Expires=1769189135&Signature=jSUyJDR4quj2wDt3QOUThG8qgCiR5srwsgppDcHO0SXNpMIfybCbFMLu2CFePOca8MhBSQG3oeN-nO~QE0jthyEnfSnxIowJt1J2puwlIInIrt1CG2q21v4elBCpGs8w-lGghrujyrcgdBMxdoCdkDwNws4RZbuJl~HT5Dhq2erDbM-z1Q-4CxNURxkxhDhK90byZmlkzT6jHxTYQfaKkAfxc8X3K6mJaEEdQQ8KCNZPsuPKh3cdsl97PrQFbHdR4LqtWcwwZGtc4RJPa7CqT4lUuNQelXDr1ZvhgbYKzMflhmhdzKglPJB8UzMVvUN~i6waEn0C4Mq2~qVP7rKxcA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/14386/poster/horizontal/en/720.jpg?Expires=1769189135&Signature=kBDvTGO2LlWcxUqmeQvuF4RRqtHpvWODYhhv7YXY0fnBlmYy9lV9m5m70VNEZKPe858AVD3KicHeEwUZ1ymwCd5nG~Vf4M9WVsDufsvwJOBeYZIEB1qMi9liYnWrOMZOMfbJNOPuyVL4TXAMI224TKoctRLYyAOtgEo2rV5YFaKg7soFEb5Cgtu2MajZQJhm4xMA4JDYzcHBRpFbczTKShwIVfmBOFfEmwvaSpIya~vdIJqkIfdXkuIAYrG7ccQ-RxF2Of~NLUcCrs69l6azepa4FMCAPZH1bHE1iGYLM5lM5iIJhLpTJ1XweuKa7gTBufCQKuAIaulfYSktyrEpQg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/14386/poster/horizontal/en/1080.jpg?Expires=1769189135&Signature=FqZrPuyLYHc9rQQL7Y3npNUrqjltBEXx2wicEI58aZYe-bcGsIcRn0hC64D3aBp2T7vDQ6TfRe4MIsWoffx6Qp~E3MseLeAJbdFIwAGJREzrpJRMjbbpflzBCR~iMMAWkdy-PpVU5-Z18Yvdzg0nLLc1y7yYXqI~ufzwxDXabmR8ESqGJfN4KyKbqkcdf5CDEjSqqIjR3qVlKFEQwuV-fmKeL7NSjP-KupZNz8~rc4cFVESStdxCsX0XMIAjX~f8IImT~3inbjAlCEhVCxaka0k9yZLnjhrJu4JgYzQtOWDIRHG3s~Cx4sM5M1dxUBsfqIlr3uPxsxDzrbZ-vzRUBQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/14386/poster/horizontal/en/1440.jpg?Expires=1769189135&Signature=W4PyVwHR-MUm81MqW7Q6bnS6DoBhDAxRUioeFP0fSYYr77x-LKbqgLw44gqoe3AQpPbtGkY5GuLb-xS1cCC-iZIDjZTP~3UZZ6vWozMOd-T8GqUIr6x4qSZ3-u8ShMXrbGQkMyjGR7g6KQOJnZkK4S9QH8YOhHcAeJfD2qbaUTZujvQfoyV4PxhDwbE0ZYNyhnfjStomAfiTlE0dVvvtaFIUksoHrOCPyPsRTSRqaJ9KL9pICrs2jM~~pS-NAf083yPQuU9BXpoN0KfUT1pMVAnVOvdpy~2nAxQ0C0xNjXv~~s3ha~gHIaJgAzblrucoKr-8AzUXFC37rQCD5McDeg__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      verticalBackdrop: {
        w240: "https://cdn.movieofthenight.com/show/14386/backdrop/vertical/240.jpg?Expires=1769189124&Signature=CpfmQYlWL617fr-968YCQEJK6SPQlaFcz0zySLbuJB1KoAzbyEJPG08gQdRr9ZvLDcmtatxyLmcBPEU0vSSxWqyxMBQnkJwmfuxKqQp1GHz~pnWS6sAFRrqZogWnp8TcKFMTirCr3R9pXzMh9RRRh1bgicfXKuc0f7U77ShAlIKic1QxZgNmkKwB0kPOlhg0A5gp0xpi14eQUM9~oTe~~SkQjjmoD1upZn5i60VEdfjeYXz6gK4-UhUy65dMFL5iy8I9XhIKgDSoDOh9p9yaYOgtOgsV5SKU0ZCT7nDEJ1R7z980MIaq92M65jNDmvamVKAACaHNTXrFIustUsgGDw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w360: "https://cdn.movieofthenight.com/show/14386/backdrop/vertical/360.jpg?Expires=1769189124&Signature=LP17ehUjEGo1LWGC8nXAeyPdaSqAleasUseoH8xPPCgpoIQubXg7vytYZIxVs0cwQ4XRWh7X26Ik~CpyYOlPz3MKlRNJPjohW7BWSowzhlk5jEnrJoJhseVx5EQ7-M9LCuPplM6EfWLmPXPFRCAr2ZldzM4N3s5AT-y1uCwwLvOkQV5~OK5~NLw9S-Tn4ed1EPmRZnQPcmKuchk8D48gVJhUe6nvJnMty2sYEoxyC6rLCqpTx3pHYz63yNN8QhWIgj~EC7jSxvHCCifV6UQJSpmhX8TL4YGjl2nVHX9CrkAmC3rMu5I~lMsBQWrihi-Eub79OHlgMM4-VtkorqT1fw__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/14386/backdrop/vertical/480.jpg?Expires=1769189124&Signature=OfoSAXKQNxQJTsb~3qX-RlLApVXhiKyjyVQcCDacpQU98TK8tclhca-DSGglXYeWCcPOWa7dxyedCMUcAkYz3YcAZLOx65KBAfqd0J44hjkW-hW5KHAdog477GW~j1NsFFnjJmDyto8LbecOBilP66pyT6eaTJm-z6bZrL8J9ajCM5iAyXKMeQWzDEu-WdFhp30oOoxHHCBHCapsAX5PnK0BgNRn-vnTd1uyj~~980JRS6p9Ekgyxz4fBhgZ0~7px1M3yt8v660d9CXrFFAlbJcU4dm-4t2Nvxpsg5O0IxQTuFKjnotaoxLZN3HQ87kJxC-wpM71dEVdr1GVTqR1MQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w600: "https://cdn.movieofthenight.com/show/14386/backdrop/vertical/600.jpg?Expires=1769189124&Signature=LaGI4iNd0oorXO490OAPiYsTTdjUpTPTRXC2hv4ELK7zW4fle3EHjQBMzD7bm8e~jL0gSfeOHGuPkBlHP5by57h9MVv5gqF9OF87qMuL4Qp~LBfKv1yi3HiaM38wVXJZ00~~~XY08hM4vYgvQ-Qi38ey~b3Aa3VWjDtHQ7FIctIQnxijaZjp2YHpYh7fXcnsNEau25Ngey5~nI746aIW6upy2z9TUvwWzSjnnu573j42pzIwU7OZ07hdphjuH4GAMwlJxAP-~WwQp3vTrD0jWFqYApYp-wEQMa5ShINWVwqHn6aXKtuZAPrCy3Jq99B5X60ZDqK7Ci-DFfd1C32KFA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/14386/backdrop/vertical/720.jpg?Expires=1769189124&Signature=NGTrDUMCo~O5GbASBqQen7g67OoiK6R3IEEzle9Uv7r2Z8hizBL58Gd-ZwRHjitTkuuzDtQLPLUjLP99P-vt9RnBPzZ66Ivz-w7SrECKTHr9b-htmA~pvql6FUsegvht5r7qyItld0yThu3rfsdV5C8K8JEN9eUUcDmMhhcFrzD~qg0Rb~l8FGpa3liDGGMkE0fmUCLiAXZQo9pCKcT4idJ7RwAFOpL-Ve3FblC1z3rJBPIQxaUmY2Fs6DAdDjEj7eHzlnMHsKR7BF41Si8hspF6~L7fwCMUecDiWCkG3SeizUVXxDcjM1DR9xerITaeL9Kr39Fpc5lhb2~8cK7X3w__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
      horizontalBackdrop: {
        w360: "https://cdn.movieofthenight.com/show/14386/backdrop/horizontal/360.jpg?Expires=1769189126&Signature=P-8BG4VtDKYKSZBLNrrBLRlKuCpkDvkVN6YL2IxukDfZN~CFUzlf9JpQDPcPcyVl4CLQvq3ceeVeE2a4LL~0jGKNBNkCnSB371sdRA1cwTPTBwfKJ1wybPmbAfpOTNvu8-J~59gd~Aw-j-5xZQCj9CQwAISfxJJ6keeTdAehb~lqgfB1MSEXG0Hqm4u4b1Yr3OcSVOR8oYJZSoFpFB9NNMmP~sX6QJbu69Z0H7OGQ3XzofntcSXEAAPWIYKnDU76JpsSm-b21XYuteKrqYSUQjWfo7ryXwImyauBHXNsSSCIgZ~cRB7ZhFDX9akPZy8-gOLZDKJnEiLL7zSfuHEsgg__&Key-Pair-Id=KK4HN3OO4AT5R",
        w480: "https://cdn.movieofthenight.com/show/14386/backdrop/horizontal/480.jpg?Expires=1769189126&Signature=CVgMEvHkmwCcgjPLVz35C8R6HKDaXPBGqNnNUIPi6hW3eVIexYbbaTeqC-d6NYkbYscJAH61Ldb-z-mZ8c4isOgQ-olZcJ-LqL8--j9-zXwZay4t6QBqRVzaS-Zm4Jo0lVMnMLTIK1dwDitxbFtMhlIyykJDvS5UPl7Ijx5GkW37VcJf4fP1dZY1IvbQvQfRZB18nOC~YQ0q5gWE0XGM9WKbIZ6yyTHM-ODWeME06IF9AsV3xe0t0LvN71aFrryvVzQMzZ5h2~a1fzbrucLrb7phxIYXpgcOAF20ejr9NELNcdyGEcj7qZBXo83DnXd9lDlGT9IWN6EzQGrebV1DOA__&Key-Pair-Id=KK4HN3OO4AT5R",
        w720: "https://cdn.movieofthenight.com/show/14386/backdrop/horizontal/720.jpg?Expires=1769189126&Signature=eK-DyogIs6swarS7h1cp94E3JBThgG2caIAHmfV3FQ5Sv5l9X9GhmdsM5gpoWTAmp2wgpgQ1C3tLXfSve3DLzYMvO8c-P6vBH7uneCF4dC8YW3mOt1KEe025Aiw5PORmyBJK70D97KWCTlDlM0L9ecqFZyFk1RiKo3aUnrAhhFqgy4XCkVirxukfGLnkVKWbaONdw3M3DPLVbL3zf6RFuHE-7xWFWNUDMovgO4HYIsWw8onywb5fBF7xyt9w0sM3iJPS311kB-Js7upbY8arI-38E39rQLf7n3CL~GC8WwzeEYETWouEbl12Mk2efiUklEOc3w5eoA1r3~2Ip7koSQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1080:
          "https://cdn.movieofthenight.com/show/14386/backdrop/horizontal/1080.jpg?Expires=1769189126&Signature=A2halL1EYfZColOYrR1QNlBet0XfRJJRm0jc585Yf-pSDUPRHx26kEIxxhO~k0W3v7QiZZUE-4-3mxzfAuOMudbZQLD2HvNMxwK6hU9CCXxWpM3N5rbi6AbKrKoTEkSMd-rIW8Zc7z~TQHFIrzkicOV1Aq6Osl-gGxW-l4YLMqmpcYgp~x3vjChDtuESkMrNmsCYUTaolbfQNm3QTgO9zyVBSW1Ewrg7FoxriboXR3bzrdSEYiB5lKiSwTFVDIc0ccZN1dq~5UrhkphI0WattnuYIcWM81OiNxjjL1EcOPEx1Z6-G1UjSoXt35BWNmZ1u0~ZqpOi4L0YbqsUUF8dvQ__&Key-Pair-Id=KK4HN3OO4AT5R",
        w1440:
          "https://cdn.movieofthenight.com/show/14386/backdrop/horizontal/1440.jpg?Expires=1769189126&Signature=juT-c1lEdTLFi5o3KarzwXqf96F4V~aCWI2IOniU~Gg5T2nZBz3nnM~z3Nv~O72N3yL7Tjk6Y5rbGn6oXlPSExEVCgphGoYVgaagewyQ2WmxFWffXHgzNRw6uxxIhxqqLp-CIdd4jtXa~mcdhPT8RYuEyjkHlYfcubelaaw6ASTO1SbC76TTD4pLtOYXeiQCUsVSbGtqACo55qQ~2PH9JyO99iXCyxtchs7hKm5p80WzcCznfo9BdLdFgxi6ei-p9bzil4Dx-vP7TbnVH~116lXVGFjZjnwaSYj3E2IwoG~cTJkFSuf7cjVGC6E-p0-~RZtGa57Qh2h1tmXZCBXHzQ__&Key-Pair-Id=KK4HN3OO4AT5R",
      },
    },
    streamingOptions: {
      us: [
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://www.amazon.com/gp/video/detail/B07SR3KDSL/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          price: {
            amount: "4.29",
            currency: "USD",
            formatted: "4.29 USD",
          },
          expiresSoon: false,
          availableSince: 1704406278,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://www.amazon.com/gp/video/detail/B07SR3KDSL/ref=atv_dp",
          quality: "sd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          price: {
            amount: "3.99",
            currency: "USD",
            formatted: "3.99 USD",
          },
          expiresSoon: false,
          availableSince: 1712669588,
        },
        {
          service: {
            id: "prime",
            name: "Prime Video",
            homePage: "https://www.amazon.com/gp/video/storefront/",
            themeColorCode: "#00A8E1",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/prime/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/prime/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://www.amazon.com/gp/video/detail/B07SR3KDSL/ref=atv_dp",
          quality: "uhd",
          audios: [
            {
              language: "eng",
            },
          ],
          subtitles: [
            {
              closedCaptions: true,
              locale: {
                language: "eng",
              },
            },
          ],
          price: {
            amount: "12.99",
            currency: "USD",
            formatted: "12.99 USD",
          },
          expiresSoon: false,
          availableSince: 1704406278,
        },
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "buy",
          link: "https://tv.apple.com/us/movie/batman-hush/umc.cmc.44rfwpt93intcyu6j3j8tpbbc?playableId=tvs.sbd.9001%3A1462976676",
          quality: "hd",
          audios: [],
          subtitles: [],
          price: {
            amount: "12.99",
            currency: "USD",
            formatted: "12.99 USD",
          },
          expiresSoon: false,
          availableSince: 1712855388,
        },
        {
          service: {
            id: "apple",
            name: "Apple TV",
            homePage: "https://tv.apple.com/",
            themeColorCode: "#000000",
            imageSet: {
              lightThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-light-theme.svg",
              darkThemeImage:
                "https://media.movieofthenight.com/services/apple/logo-dark-theme.svg",
              whiteImage:
                "https://media.movieofthenight.com/services/apple/logo-white.svg",
            },
          },
          type: "rent",
          link: "https://tv.apple.com/us/movie/batman-hush/umc.cmc.44rfwpt93intcyu6j3j8tpbbc?playableId=tvs.sbd.9001%3A1462976676",
          quality: "hd",
          audios: [],
          subtitles: [],
          price: {
            amount: "3.99",
            currency: "USD",
            formatted: "3.99 USD",
          },
          expiresSoon: false,
          availableSince: 1712855388,
        },
      ],
    },
  },
];

export const mockGenres: Genre[] = [
  {
    id: "action",
    name: "Action",
  },
  {
    id: "animation",
    name: "Animation",
  },
  {
    id: "crime",
    name: "Crime",
  },
  {
    id: "drama",
    name: "Drama",
  },
];
