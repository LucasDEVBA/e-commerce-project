const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const beautyFragrancesCategory = await prisma.category.create({
      data: {
        name: "Beleza e Fragrâncias",
        slug: "beautyFragrances",
        imageUrl: "https://i.postimg.cc/FsHmTX6w/CHANEL-01.png",
      },
    });

    const beautyFragrances = [
      {
        name: "Chanel No. 5 Perfume",
        slug: "chanel-no-5-perfume",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.postimg.cc/FsHmTX6w/CHANEL-01.png",
          "https://i.postimg.cc/g2gfN7ps/CHANEL-02.png",
          "https://i.postimg.cc/d0DgX9tY/CHANEL-03.png",
          "https://i.postimg.cc/vZYJ7sJD/CHANEL-04.png",
        ],
        basePrice: 650,
        categoryId: beautyFragrancesCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Dior J'adore Eau de Parfum",
        slug: "dior-jadore-eau-de-parfum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.postimg.cc/MTJ2QQqJ/JADORE-01.jpg",
          "https://i.postimg.cc/Znj12s3J/JADORE-02.png",
          "https://i.postimg.cc/y6P4DxG2/JADORE-03.png",
        ],
        basePrice: 300,
        categoryId: beautyFragrancesCategory.id,
        discountPercentage: 15,
      },
    ];

    await prisma.product.createMany({
      data: beautyFragrances,
    });

    const electronicsCategory = await prisma.category.create({
      data: {
        name: "Eletrônicos",
        slug: "electronics",
        imageUrl:
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S2421HN.png",
      },
    });

    const electronics = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S2421HN.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S2421HN.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S2421HN.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S2421HN.png",
        ],
        basePrice: 1500,
        categoryId: electronicsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-P2422H.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-P2422H.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-P2422H.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-P2422H.png",
        ],
        basePrice: 2000,
        categoryId: electronicsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ];
    await prisma.product.createMany({
      data: electronics,
    });

    const wineCategory = await prisma.category.create({
      data: {
        name: "Bebidas Alcoólicas",
        slug: "wine",
        imageUrl: "https://i.postimg.cc/FsTxkXN9/BLACK-01.png",
      },
    });

    const wine = [
      {
        name: "Château Margaux 1998",
        slug: "chateau-margaux-1998",
        description: "Descrição do Château Margaux 1998...",
        imageUrls: [
          "https://i.postimg.cc/Kz3WJvcr/CHATEU-01.png",
          "https://i.postimg.cc/Lsb7tZS8/CHATEU-02.png",
        ],
        basePrice: 650,
        categoryId: wineCategory.id,
        discountPercentage: 10,
      },
      {
        name: "BLACK LABEL",
        slug: "black-label",
        description: "Descrição do BLACK LABEL...",
        imageUrls: [
          "https://i.postimg.cc/FsTxkXN9/BLACK-01.png",
          "https://i.postimg.cc/zG3Fn2GT/BLACK-02.png",
        ],
        basePrice: 750,
        categoryId: wineCategory.id,
        discountPercentage: 10,
      },
    ];

    await prisma.product.createMany({
      data: wine,
    });

    const luxuryCategory = await prisma.category.create({
      data: {
        name: "Luxo",
        slug: "luxury",
        imageUrl:
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed-phone.png",
      },
    });

    const luxury = [
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed-phone.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-lightspeed-phone.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-lightspeed-phone.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-lightspeed-phone.png",
        ],
        basePrice: 1200,
        categoryId: luxuryCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-astro-a30.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-astro-a30.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-astro-a30.png",
          "https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-astro-a30.png",
        ],
        basePrice: 1500,
        categoryId: luxuryCategory.id,
        discountPercentage: 15, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: luxury,
    });

    const ediblesCategory = await prisma.category.create({
      data: {
        name: "Comestíveis",
        slug: "edibles",
        imageUrl: "https://i.postimg.cc/JhkgQzz3/CAIXA-CHOCOLATE-01.png",
      },
    });

    const edibles = [
      {
        name: "Chocolate Delight",
        slug: "chocolate-delight",
        description: "Descrição do Chocolate Delight...",
        imageUrls: [
          "https://i.postimg.cc/JhkgQzz3/CAIXA-CHOCOLATE-01.png",
          "https://i.postimg.cc/52GTvCbN/CAIXA-CHOCOLATE-02.png",
          "https://i.postimg.cc/Cxd9zNyQ/CAIXA-CHOCOLATE-03.jpg",
        ],
        basePrice: 950,
        categoryId: ediblesCategory.id,
        discountPercentage: 10,
      },
    ];
    await prisma.product.createMany({
      data: edibles,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
