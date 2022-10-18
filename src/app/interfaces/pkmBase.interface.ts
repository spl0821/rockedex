// Interfaz para controlar el tipado del componente de botonera
export interface PkmButton {
    pkmType: 'primary' | 'default';
};

// Interfaz para controlar el tipado del componente de top bar
export interface PkmTopBar {
    logo: string;
};

// Interfaz para controlar el tipado del componente de boton de agregar a favorito desde el dashboard
export interface PkmFavButton {
    checked: boolean;
};

export interface PokeResponse {
    count: number;
    next: string;
    previous: string | null;
    results: PokeResults[];
}

export interface PokeResults {
    name: string;
    url: string;
}

export interface PokeDetail {
    name?: string;
    types: [
        {
            slot: number,
            type: {
                name: string,
                url: string;
            }
        }
    ];
    id: number;
    height?: number;
    weight?: number;
    sprites: {
        front_default?: string;
        other: {
            dream_world: {
                front_default: string;
            }
        }
    },
    checked: boolean;
}
