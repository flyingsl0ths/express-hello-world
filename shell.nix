{ pkgs ? import <nixpkgs> { } }:
with pkgs; mkShell {
  nativeBuildInputs = [
    nixpkgs-fmt
    nodejs
    nodePackages.bash-language-server
    nodePackages.npm-check-updates
    nodePackages.prettier
    shfmt
  ];
}
