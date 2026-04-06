import { sql } from "../config/db.js";

const SAMPLE_PRODUCTS = [
  {
    name: "Premium Wireless Headphones",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Mechanical Gaming Keyboard",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Smart Watch Pro",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "4K Ultra HD Camera",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Minimalist Backpack",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Wireless Gaming Mouse",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Smart Home Speaker",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "LED Gaming Monitor",
    price: 449.99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Noise Cancelling Earbuds",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Portable SSD 1TB",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Ergonomic Office Chair",
    price: 219.99,
    image:
      "https://images.unsplash.com/photo-1582582429416-963dc66c6f8b?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Desk Lamp (Warm White)",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&auto=format&fit=crop&q=60",
  },
];

export async function seedProducts({ reset = false } = {}) {
  try {
    if (reset) {
      await sql`TRUNCATE TABLE products RESTART IDENTITY`;
    } else {
      const [{ count }] = await sql`SELECT COUNT(*)::int AS count FROM products`;
      if (count > 0) {
        console.log(`Seed skipped (products already exist: ${count})`);
        return { skipped: true, inserted: 0 };
      }
    }

    // insert all products
    for (const product of SAMPLE_PRODUCTS) {
      await sql`
        INSERT INTO products (name, price, image)
        VALUES (${product.name}, ${product.price}, ${product.image})
      `;
    }

    console.log(`Database seeded successfully (${SAMPLE_PRODUCTS.length} products)`);
    return { skipped: false, inserted: SAMPLE_PRODUCTS.length };
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}

const isDirectRun = import.meta.url === `file://${process.argv[1]}`;
if (isDirectRun) {
  const reset = process.argv.includes("--reset");
  seedProducts({ reset })
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
