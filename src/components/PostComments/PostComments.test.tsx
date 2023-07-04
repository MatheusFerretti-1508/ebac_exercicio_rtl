import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Espera-se que o componente renderize', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Para adicionar comentários', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Comentário com teste, um',
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));
    
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Comentário com teste, dois',
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    });
});