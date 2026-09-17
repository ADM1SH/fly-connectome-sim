export function createMetricCard(
    containerId: string,
    label: string,
    initialValue: string,
    unit: string
): HTMLElement {
    const card = document.createElement("div");
    card.id = containerId;
    card.className = "metric-card";
    card.style.backgroundColor = "#0A0A0C";
    card.style.border = "1px solid #1A1D24";
    card.style.borderRadius = "4px";
    card.style.padding = "12px 16px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.gap = "4px";

    const lbl = document.createElement("span");
    lbl.className = "label-caps";
    lbl.style.fontFamily = "'JetBrains Mono', monospace";
    lbl.style.fontSize = "11px";
    lbl.style.fontWeight = "700";
    lbl.style.letterSpacing = "0.05em";
    lbl.style.color = "#8A909E";
    lbl.textContent = label.toUpperCase();

    const valRow = document.createElement("div");
    valRow.style.display = "flex";
    valRow.style.alignItems = "baseline";
    valRow.style.gap = "6px";

    const val = document.createElement("span");
    val.className = "metric-value";
    val.style.fontFamily = "'JetBrains Mono', monospace";
    val.style.fontSize = "20px";
    val.style.fontWeight = "600";
    val.style.color = "#EDEDED";
    val.textContent = initialValue;

    const u = document.createElement("span");
    u.style.fontFamily = "'JetBrains Mono', monospace";
    u.style.fontSize = "11px";
    u.style.color = "#8A909E";
    u.textContent = unit;

    valRow.appendChild(val);
    valRow.appendChild(u);
    card.appendChild(lbl);
    card.appendChild(valRow);

    return card;
}

export function updateMetricCard(containerId: string, value: string): void {
    const card = document.getElementById(containerId);
    if (!card) return;
    const valElem = card.querySelector(".metric-value");
    if (valElem) {
        valElem.textContent = value;
    }
}

export function createStatusBadge(text: string, state: "active" | "danger" | "idle"): HTMLElement {
    const badge = document.createElement("span");
    badge.style.fontFamily = "'JetBrains Mono', monospace";
    badge.style.fontSize = "10px";
    badge.style.fontWeight = "700";
    badge.style.letterSpacing = "0.05em";
    badge.style.padding = "2px 6px";
    badge.style.borderRadius = "2px";

    switch (state) {
        case "active":
            badge.style.backgroundColor = "#002B11";
            badge.style.color = "#66FFA3";
            badge.style.border = "1px solid #00FF66";
            break;
        case "danger":
            badge.style.backgroundColor = "#3D000A";
            badge.style.color = "#FFA8B3";
            badge.style.border = "1px solid #FF334B";
            break;
        case "idle":
            badge.style.backgroundColor = "#121215";
            badge.style.color = "#8A909E";
            badge.style.border = "1px solid #262933";
            break;
    }

    badge.textContent = text;
    return badge;
}
