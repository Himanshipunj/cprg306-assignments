export default function Item({ name, quantity, category }) {
    return (
      <section className="m-2 bg-neutral-100">
        <h3 className="text-xl font-bold text-violet-900 ">{name}</h3>
        <p>
          <span className="font-bold">Quantity:</span> {quantity}
        </p>
        <p>Category: {category}</p>
      </section>
    );
  }