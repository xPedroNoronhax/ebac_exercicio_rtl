import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";

describe("Teste para o componente Post", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<Post />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve adicionar dois comentários", () => {
    render(<Post />);

    //teste
    fireEvent.change(screen.getByTestId("campoComentario"), {
      target: {
        value: "teste",
      },
    });
    fireEvent.click(screen.getByTestId("comment-button"));

    // teste2
    fireEvent.change(screen.getByTestId("campoComentario"), {
      target: {
        value: "teste2",
      },
    });
    fireEvent.click(screen.getByTestId("comment-button"));

    expect(screen.getAllByTestId("comentarioAdicionado")).toHaveLength(2);
  });
});
