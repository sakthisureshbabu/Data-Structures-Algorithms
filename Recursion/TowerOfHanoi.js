function TowerOfHanoi(n, from_rod, to_rod, aux_rod) {
    if(n==0)
        return
    TowerOfHanoi(n-1, from_rod, aux_rod, to_rod);
    console.log(`Move ${n} from ${from_rod} rod to ${to_rod} rod`);
    TowerOfHanoi(n-1, aux_rod, to_rod, from_rod);
};

TowerOfHanoi(3, 'A', 'C', 'B');